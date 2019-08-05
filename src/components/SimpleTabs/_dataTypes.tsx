import React from 'react';

export interface TabItem {
    label: string,
    value : string,
    a11y?: string,
    checked?: false
}

export interface TabProps {
    title?: string,
    items: ReadonlyArray<TabItem>;
    tabOnChange?: TriggerFunction;
    renderPanel?: Function;
    tabPanelUrl: string,
    collapsibelTreeView?: boolean,
    showSelectAll?: boolean
}

export interface TriggerFunction {
    (event: React.ChangeEvent<{}>, newValue: number): void;
}

export interface RenderPanel {
    (value?: any): any;
}

export interface CheckBoxTreeViewConfig{
  title?: string,
  tabsUrl : string,
  renderPanel?: Function,
  tabOnChange?: TriggerFunction,
  tabPanelUrl: string,
  collapsibelTreeView?: boolean,
  showSelectAll?: boolean,
  updateButton? : false,
  updateButtonAction?: React.MouseEventHandler,
  updateButtonLabel?: string
}