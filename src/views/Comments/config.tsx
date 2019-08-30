import { DynamicTabProps } from "../../components/DynamicTabs";
import { DynamicTreeViewConfig } from '../../components/DynamicTreeView';

export const dynamicTabProps: DynamicTabProps = {
    tabsUrl: "http://localhost:3001/jda/tabs", // TODO: Should be able to accept JSON or a callback to getch data
    collapsibelTreeView: false,
    showSelectAll: true,
    setTabIndex: () => {},
    setTabValue: () => {},
    tabIndex: 0,
    tabValue: "",
    tabItems: [],
    getTabItems: () => {},
    loading: true,
  };

export const dynamicTreeViewProps: DynamicTreeViewConfig ={
    treeItems: [],
    tabChanged: false,
    openItems : [],
    searchString : "",
    checkedItems: [],
    selectedTab: "",
    treeDataUrl: "http://localhost:3001/jda/tabs",
    getTreeData: (data, tab) => {},
    setChecked: (data) => {},
    setOpen: (data) => {},
    setSearch: (data) => {},
    setSelectedTab: (data) => {},
    collapsibelTreeView: false,
    showSelectAll: true,
    updateButton: true,
    updateButtonLabel: "Update view",
    loading: true
}