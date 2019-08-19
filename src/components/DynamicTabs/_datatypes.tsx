export interface TriggerFunction {
  (event: React.ChangeEvent<{}>, newValue: number): void;
}
export interface TabItem {
  label: string;
  value: string;
  a11y?: string;
  checked?: false;
}

export interface DynamicTabProps  {
  tabsUrl: string;
  getTabItems: Function;
  setTabIndex: Function;
  setTabValue: Function;
  tabIndex: number;
  tabValue: string;
  tabItems: ReadonlyArray<TabItem>;
  loading: boolean;
  tabOnChange?: TriggerFunction;
  renderPanel?: Function;
  collapsibelTreeView?: boolean;
  showSelectAll?: boolean;
  onSelectItem?: Function;
}
