import { ClListItem, PropertyObject, CheckBoxTreeViewState } from "./_dataTypes";
import { indexOf, forEach, remove, intersection, isArray, omit } from "lodash";

export default class NodeModel {
  parentsToChild: any;
  childrenToParents: any;
  allValues: any;
  ptoc: PropertyObject = {};
  ctop: PropertyObject = {};
  allc: Array<string | number> = [];
  checked: Array<string | number> = [];
  open: Array<string | number> = [];
  paths: any = {};
  searchString: string | number = "";
  filterItems: any = [];
  filterList: any = [];
  listItems: any = {};

  constructor(
    listItems: Array<ClListItem>,
    initValues: CheckBoxTreeViewState
  ) {
    this.listItems = listItems;
    this.checked = initValues.checked;
    this.open = initValues.open;
    this.searchString = initValues.search;

    this.flatten(listItems);
    this.setPath(listItems);
    this.applyFilter();
  }

  flatten = (
    parents: Array<ClListItem>,
    depth: number = 0,
    parent?: string | number
  ) => {
    forEach(parents, (parent: ClListItem) => {
      this.allc.push(parent.value);
      if (parent.children) {
        forEach(parent.children, (child: ClListItem) => {
          this.allc.push(child.value);
          // Set the values for Parent to Child Properties
          if (this.ptoc.hasOwnProperty(parent.value)) {
            this.ptoc[parent.value].push(child.value);
          } else {
            this.ptoc[parent.value] = [child.value];
          }
          // Set the values for Child to Parent Properties
          if (!this.ctop.hasOwnProperty(child.value)) {
            this.ctop[child.value] = [parent.value];
          }
        });

        // for All children flattern recursively

        this.flatten(parent.children, ++depth, parent.value);
      } else {
        if (!this.ptoc.hasOwnProperty(parent.value)) {
          this.ptoc[parent.value] = [];
        }
      }
    });
  };
  setChildFilterItems = (children: any) => {
    forEach(children, child => {
      if (indexOf(this.filterList, child.value) === -1) {
        this.filterList.push(child.value);
      }
      if (child.children) {
        this.setChildFilterItems(child.children);
      }
    });
  };
  getItem = (
    filterItems: any,
    items: any,
    path: any,
    reference: Array<any> = []
  ) => {
    const currentIndex = path.shift();
    let newReferece = items[currentIndex];

    if (!filterItems[currentIndex]) {
      filterItems[currentIndex] = omit(items[currentIndex], "children");
      if (indexOf(this.filterList, filterItems[currentIndex].value) === -1) {
        this.filterList.push(filterItems[currentIndex].value);
      }
    }
    const nextItems = items[currentIndex].children;
    if (path.length > 0) {
      if (!filterItems[currentIndex].children) {
        filterItems[currentIndex].children = [];
      }
      this.getItem(
        filterItems[currentIndex].children,
        nextItems,
        path,
        newReferece.children
      );
    } else {
      if (newReferece.children) {
        filterItems[currentIndex].children = newReferece.children;
        this.setChildFilterItems(newReferece.children);
      }
    }
    return;
  };
  applyFilter = () => {
    this.filterItems = [];
    if (this.searchString !== "") {
      forEach(this.paths, (path, result) => {
        if (
          result.toLowerCase().indexOf(`${this.searchString}`.toLowerCase()) >=
          0
        ) {
          this.getItem(
            this.filterItems,
            this.listItems,
            `${path}`.split("-"),
            this.listItems
          );
        }
      });
      //this.filterItems = this.listItems;
    } else {
      this.filterItems = this.listItems;
      this.filterList = [];
    }
  };
  setPath = (parents: any, path: any = "", parentKey?: any): void => {
    let localPath = path || "";
    forEach(parents, (parent, key) => {
      if (path === "") {
        localPath = key;
      } else {
        localPath = `${path}-${key}`;
      }

      if (parent.hasOwnProperty("children") && parent.children.length > 0) {
        this.setPath(parent.children, `${localPath}`);
      }
      this.paths[parent.label] = `${localPath}`;
    });

    return;
  };

  getSelectedCount = (): number => {
    let count: number = 0;
    const items = this.filterList.length
      ? intersection(this.checked, this.filterList)
      : this.checked;
    forEach(items, checkedItem => {
      if (checkedItem !== "all" && this.ptoc.hasOwnProperty(checkedItem)) {
        if (this.ptoc[checkedItem].length === 0) {
          count++;
        }
      }
    });

    return count;
  };

  selectOpen = (selectValue: string | number): void => {
    if (indexOf(this.open, selectValue) === -1) {
      if (
        isArray(this.ptoc[selectValue]) &&
        this.ptoc[selectValue].length > 0
      ) {
        this.open.push(selectValue);
      }
    } else {
      remove(this.open, i => selectValue === i);
    }
    return;
  };

  selectChildren = (selectValue: string | number): void => {
    forEach(this.ptoc[selectValue], (selectItem: string | number) => {
      this.checked.push(selectItem);
      if (this.ptoc.hasOwnProperty(selectItem)) {
        this.selectChildren(selectItem);
      }
    });
    return;
  };

  selectParent = (selectValue: string | number): void => {
    forEach(this.ctop[selectValue], (selectItem: string | number) => {
      if (indexOf(this.checked, selectItem) === -1) {
        this.checked.push(selectItem);
      }
      if (this.ptoc.hasOwnProperty(selectItem)) {
        this.selectParent(selectItem);
      }
    });
    return;
  };

  deSelectChildren = (selectValue: string | number): void => {
    forEach(this.ptoc[selectValue], (selectItem: string | number) => {
      if (indexOf(this.checked, selectItem) !== -1) {
        remove(this.checked, i => i === selectItem);
      }
      if (this.ptoc.hasOwnProperty(selectItem)) {
        this.deSelectChildren(selectItem);
      }
    });
    return;
  };

  deSelectParent = (selectValue: string | number): void => {
    forEach(this.ctop[selectValue], (parent: string | number) => {
      if (
        indexOf(this.checked, parent) !== -1 &&
        intersection(this.ptoc[parent], this.checked).length === 0
      ) {
        remove(this.checked, i => i === parent);
      }
      if (this.ctop.hasOwnProperty(parent)) {
        this.deSelectParent(parent);
      }
    });
    return;
  };

  selectItems = (selectValue: string | number): void => {
    // If you are selecting all, then select all and return
    if (selectValue === "all") {
      this.checked = ["all", ...this.allc];
      return;
    }

    // Add current Item into selects
    if (indexOf(this.checked, selectValue) === -1) {
      this.checked.push(selectValue);
    }
    // Select All children of current item
    this.selectChildren(selectValue);

    // Select all the parents of the current item
    this.selectParent(selectValue);
    return;
  };

  deSelectItems = (selectValue: string | number): void => {
    // If you are selecting all, then empty all checked and return
    if (selectValue === "all") {
      this.checked = [];
      return;
    }

    // Add current Item into selects
    if (indexOf(this.checked, selectValue) !== -1) {
      remove(this.checked, i => i === selectValue);
    }

    this.deSelectChildren(selectValue);
    this.deSelectParent(selectValue);
    return;
  };
}
