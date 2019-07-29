import { ClListProps, ClListItem, PropertyObject } from './_dataTypes';
import { indexOf, forEach, remove, compact, intersection } from 'lodash';

export default class NodeModel {
    parentsToChild: any;
    childrenToParents: any;
    allValues: any;
    ptoc: PropertyObject = {};
    ctop: PropertyObject = {};
    allc: Array<string|number> = []; 
    checked: Array<string|number> = [];

    constructor(listItems: Array<ClListItem>, checked:Array<string|number>) {
        // this.getParentsToChild(listProps);
        // this.getchildrenToParents(listProps);
        // this.getAll(listProps);
        this.flatten(listItems);
        this.checked = checked;
    }

    flatten = (parents: Array<ClListItem>, depth: number = 0, parent?: string | number) => {
        forEach(parents, (parent : ClListItem) => {
            this.allc.push(parent.value);
            if(parent.children) {
                forEach(parent.children, (child: ClListItem) => {
                    this.allc.push(child.value);
                    // Set the values for Parent to Child Properties
                    if(this.ptoc.hasOwnProperty(parent.value)) {
                        this.ptoc[parent.value].push(child.value);
                    } else {
                        this.ptoc[parent.value] = [child.value];
                    }
                    // Set the values for Child to Parent Properties
                    if(this.ctop.hasOwnProperty(child.value)) {
                        this.ctop[child.value].push(parent.value);
                    } else {
                        this.ctop[child.value] = [parent.value]
                    }
                })

                // for All children flattern recursively
            
                this.flatten(parent.children, ++depth, parent.value);
            } else {
                if(!this.ptoc.hasOwnProperty(parent.value)) {
                    this.ptoc[parent.value] = [];
                }
            }
        })
    }

    selectChildren = (selectValue: string|number, children: Array<string|number> = []) : void => {
        forEach(this.ptoc[selectValue], (selectItem: string|number) => {
                this.checked.push(selectItem)
            if(this.ptoc.hasOwnProperty(selectItem)) {
                this.selectChildren(selectItem, children);
            }
        })
        return;
    }

    

    selectParent = (selectValue: string|number, parents: Array<string|number> = []) : void => {
        forEach(this.ctop[selectValue], (selectItem: string|number) => {
            if(indexOf(this.checked, selectItem) === -1) {
                this.checked.push(selectItem)
            }
            if(this.ptoc.hasOwnProperty(selectItem)) {
                this.selectParent(selectItem, parents);
            }
        })
        return;
    }

    deSelectChildren = (selectValue: string|number) : void => {
        forEach(this.ptoc[selectValue], (selectItem: string|number) => {
                if(indexOf(this.checked, selectItem) !== -1) {
                    remove(this.checked, i => i === selectItem)
                }
            if(this.ptoc.hasOwnProperty(selectItem)) {
                this.deSelectChildren(selectItem);
            }
        })
        return;
    }

    deSelectParent = (selectValue: string|number) : void => {
        forEach(this.ctop[selectValue], (parent: string|number) => {
            if(indexOf(this.checked, parent) !== -1 && intersection(this.ptoc[parent], this.checked).length === 0) {
                remove(this.checked, i => i === parent)
            }
            if(this.ctop.hasOwnProperty(parent)) {
                this.deSelectParent(parent);
            }
            
        })
        return;
    }

    selectItems = (selectValue : string | number) : void => {
        // If you are selecting all, then select all and return
        if(selectValue === 'all') {
            this.checked = ['all', ...this.allc];
            return
        }

        // Add current Item into selects
        if(indexOf(this.checked, selectValue) === -1) {
            this.checked.push(selectValue)
        }
        // Select All children of current item
        this.selectChildren(selectValue);

        // Select all the parents of the current item
        this.selectParent(selectValue);
        return;
    }

    deSelectItems = (selectValue : string | number) : void => {
        // If you are selecting all, then empty all checked and return
        if(selectValue === 'all') {
            this.checked = [];
            return
        }

        // Add current Item into selects
        if(indexOf(this.checked, selectValue) !== -1) {
            remove(this.checked, i => i === selectValue)
        }
        
        this.deSelectChildren(selectValue);
        this.deSelectParent(selectValue);
        return;
    }
    // getParentsToChild = (items: Array<ClListItem>) : void => {
    //     forEach(items, item => {
    //         if (item.children) {
    //             forEach(item.children, child => {
    //                 if (indexOf(keys(this.parentsToChild), `${item.value}`) >= 0) {
    //                     if (indexOf(this.parentsToChild[item.value], child.value) === -1) {
    //                         this.parentsToChild[item.value].push(child.value);
    //                         if (item.children && item.children.length) {
    //                             this.getParentsToChild(item.children)
    //                         }
    //                     }
    //                 } else {
    //                     this.parentsToChild[item.value] = [child.value];
    //                     if (item.children && item.children.length) {
    //                         this.getParentsToChild(item.children)
    //                     }
    //                 }

    //                 if (this.childrenToParents[child.value]) {
    //                     if (indexOf(this.childrenToParents[child.value], item.value) === -1) {
    //                         this.childrenToParents[child.value].push(item.value);
    //                     }
    //                 } else {
    //                     this.childrenToParents[child.value] = [item.value]
    //                 }
    //                 if (this.childrenToParents[item.value]) {
    //                     this.childrenToParents[child.value] = union(this.childrenToParents[child.value], this.childrenToParents[item.value])
    //                 }
    //                 if (child.children && child.children.length) {
    //                     this.getchildrenToParents(child.children, child.value);
    //                 }

    //             })
    //         }
    //     })
    //     return;
    // }

    // getchildrenToParents = (items: any, parent?: any) => {
    //     forEach(items, item => {
    //         if (item.children) {
    //             forEach(item.children, child => {
    //                 if (this.childrenToParents[child.vaue]) {
    //                     if (indexOf(this.childrenToParents[child.value], item.value) === -1) {
    //                         this.childrenToParents[child.value].push(item.value);
    //                     }
    //                 } else {
    //                     this.childrenToParents[child.value] = [item.value]
    //                 }
    //                 if (this.childrenToParents[item.value]) {
    //                     this.childrenToParents[child.value] = union(this.childrenToParents[child.value], this.childrenToParents[item.value])
    //                 }
    //                 if (child.children && child.children.length) {
    //                     this.getchildrenToParents(child.children, child.value);
    //                 }
    
    
    //             })
    //         } else {
    //             if (parent) {
    //                 if (this.childrenToParents[item.vaue]) {
    //                     if (indexOf(this.childrenToParents[item.value], parent) === -1) {
    //                         this.childrenToParents[item.value].push(parent);
    //                     }
    //                 } else {
    //                     this.childrenToParents[item.value] = [parent]
    //                 }
    //                 if (this.childrenToParents[parent]) {
    //                     this.childrenToParents[item.value] = union(this.childrenToParents[item.value], this.childrenToParents[parent])
    //                 }
    //             }
    //         }
    //     })
    //     return;
    // }

    // getAll = (items: any,) => {
    //     forEach(items, item => {
    //         if(indexOf(this.allValues, item.value) === -1) {
    //             this.allValues.push(item.value)
    //         }
    //         if(item.children && item.children.length) {
    //             this.getAll(item.children);
    //         }
    //     })
    // }
    
    // selectChildren = (reference: any, children: any, checked: any) => {
    //     forEach(children, child => {
    //         if(indexOf(checked, child) === -1) {
    //             checked.push(child)
    //         }
    //         if(reference[child]) {
    //             this.selectChildren(reference, reference[child], checked);
    //         }
    //     })
    //     return checked;
    // }
    
    // deSelectChildren = (reference: any, parents: any, checked: any) => {
    //     forEach(parents, parent => {
    //         const parentIndex = checked.indexOf(parent);
    //         if (parentIndex !== -1) {
    //             remove(checked, (i, j) => parentIndex === j);
    //         }
    //         if(reference[parent]) {
    //             this.deSelectChildren(reference, reference[parent], checked);
    //         }
    //     })
    //     return checked;
    // }
}