import AppState from './state.type';
import { tabStateInit } from './components/DynamicTabs';
import { dynamicTreeStateInit } from './components/DynamicTreeView';

const initState: AppState = {
    tabState : tabStateInit,
    treeviewState : dynamicTreeStateInit   
}
export default initState;