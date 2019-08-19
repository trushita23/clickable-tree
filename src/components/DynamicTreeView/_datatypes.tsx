
export interface TreeNode {
  label: string;
  value: string;
  checked: boolean;
  children?: Array<TreeNode>;
}

export interface SearchFunction {
  (search: string): void;
}

export interface SetOpenFunction {
  (openItems: Array<any>): void;
}

export interface SetCheckedFunction {
  (openItems: Array<any>): void;
}

export interface GetTreeDataFunction {
  (url: string): void;
}

export interface SelectedTabFunction {
  (selectedTab: string): void;
}

export interface DynamicTreeViewConfig {
    loading: boolean;
    tabChanged: boolean;
    treeItems: Array<TreeNode>;
    openItems :Array<any>;
    searchString : string;
    checkedItems: Array<any>;
    selectedTab: string;
    treeDataUrl: string;
    getTreeData: GetTreeDataFunction;
    setChecked: SetCheckedFunction;
    setOpen: SetOpenFunction;
    setSearch: SearchFunction;
    setSelectedTab: SelectedTabFunction;
    collapsibelTreeView: boolean;
    showSelectAll: boolean;
    updateButton?: boolean;
    updateButtonAction?: React.MouseEventHandler;
    updateButtonLabel?: string;
    
  }