import React, {FC} from 'react';
import {DynamicModuleLoader} from 'redux-dynamic-modules';
import {connect} from 'react-redux';

import { getTabTransitionModule, GET_ITEMS, SET_TAB_INDEX, SET_TAB_VALUE } from './_redux';
import { SimpleTabs } from './_components/Simpletabs';
import { DynamicTabProps, TabState } from './_datatypes';
// let dispatched = false;
const ConnectedTabs: FC<DynamicTabProps> = (props) => {
  if(props.tabItems.length === 0 && props.tabsUrl) {
    props.getTabItems(props.tabsUrl);
  }
  return (
    <DynamicModuleLoader modules={[getTabTransitionModule()]}>
      <SimpleTabs { ...props}/>
    </DynamicModuleLoader>
  )
}

const mapStateToProps = (state: any) => {
  if(!state.tabState) {
    return {};
  }
    return state.tabState;
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    setTabIndex: (index: number) => {dispatch({ type: SET_TAB_INDEX, payload: index })},
    setTabValue: (tabValue: string) => dispatch({ type: SET_TAB_VALUE, payload: tabValue }),
    getTabItems: (url: string) => {dispatch({ type: GET_ITEMS, url })}
  };
};

const DynamicTabs = connect(mapStateToProps, mapDispatchToProps)(ConnectedTabs);
export default DynamicTabs;
export * from './_datatypes';