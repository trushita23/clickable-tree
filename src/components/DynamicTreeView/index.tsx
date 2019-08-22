import React, { FC } from "react";
import { DynamicModuleLoader } from "redux-dynamic-modules";
import { connect } from "react-redux";

import {
  getCheckBoxCheckedModule,
  GET_ITEMS,
  SET_CHECKED,
  SET_LOADING,
  SET_OPEN,
  SET_SEARCH,
  SET_SELECETED_TAB
} from "./_redux";
import CheckBoxTreeView from "./_components/CheckBoxTreeView";
import { DynamicTreeViewConfig, DynamicTreeState } from "./_dataTypes";

export const dynamicTreeStateInit: DynamicTreeState = {
  loading: true,
  tabChanged: false,
  treeItems: [],
  openItems: [],
  searchString: "",
  checkedItems: [],
  selectedTab: ""
};
const ConnectedTreeView: FC<DynamicTreeViewConfig> = (props) => {
  if (props.selectedTab && props.tabChanged) {
    props.setSelectedTab(props.selectedTab);
  }
  if (
    props.tabChanged ||
    (props.treeItems.length === 0 && props.treeDataUrl && props.selectedTab)
  ) {
    props.getTreeData(`${props.treeDataUrl}/${props.selectedTab}`, props.selectedTab);
  }
  return (
    <DynamicModuleLoader modules={[getCheckBoxCheckedModule()]}>
      <CheckBoxTreeView {...props} />
    </DynamicModuleLoader>
  );
};

const mapStateToProps = (state: any, ownProps: DynamicTreeViewConfig) => {
  if (!state.treeviewState) {
    return ownProps;
  }
  let tabChanged = false;

  if (state.treeviewState.selectedTab !== state.tabState.tabValue) {
    tabChanged = true;
  }
  if ((state.treeviewState.treeItems || tabChanged)) {
    return {
      ...state.treeviewState,
      tabChanged: tabChanged,
      selectedTab: state.tabState.tabValue
    };
  } else {
    return ownProps;
  }
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    setChecked: (checkedItems: Array<any>) => {
      dispatch({ type: SET_CHECKED, payload: checkedItems });
    },
    setOpen: (openItems: Array<any>) => {
      dispatch({ type: SET_OPEN, payload: openItems });
    },
    setSearch: (search: string) => {
      dispatch({ type: SET_SEARCH, payload: search });
    },
    setSelectedTab: (selectedTab: string) => {
      dispatch({ type: SET_SELECETED_TAB, payload: selectedTab });
    },
    getTreeData: (url: string, tab : string) => {
      dispatch({ type: SET_LOADING, payload: true });
      dispatch({ type: GET_ITEMS, url: url });
      dispatch({ type: SET_SELECETED_TAB, payload: tab })
    }
  };
};

const DynamicTreeView = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedTreeView);
export default DynamicTreeView;
export * from "./_dataTypes";
