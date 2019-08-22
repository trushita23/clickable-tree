export interface TriggerFunction {
  (event: React.ChangeEvent<{}>, newValue: number): void;
}
export interface TabItem {
  label: string;
  value: string;
  a11y?: string;
  checked?: false;
}

export interface TabState {
  tabIndex: number | string;
  tabValue: string;
  tabItems: ReadonlyArray<TabItem>;
  loading: boolean;
}

export interface DynamicTabProps extends TabState  {
  tabsUrl: string;
  getTabItems: Function;
  setTabIndex: Function;
  setTabValue: Function;
  tabOnChange?: TriggerFunction;
  renderPanel?: Function;
  collapsibelTreeView?: boolean;
  showSelectAll?: boolean;
  onSelectItem?: Function;
}
