import React from "react";

export interface TabPanelProps {
  children?: React.ReactNode;
  index?: any;
  value?: any;
  renderPanel?: Function;
  tabPanelUrl?: string;
  collapsibelTreeView?: boolean;
  showSelectAll?: boolean;
  onSelectItem?: Function;
  secondaryColor: string;
}
