import { TabState } from "./components/DynamicTabs";
import { DynamicTreeState } from "./components/DynamicTreeView";

export default interface AppState {
  tabState: TabState;
  treeviewState: DynamicTreeState;
}
