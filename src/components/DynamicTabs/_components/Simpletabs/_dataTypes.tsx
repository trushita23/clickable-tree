import React from "react";
import { DynamicTabProps } from '../../_dataTypes';
export interface TabItem {
  label: string;
  value: string;
  a11y?: string;
  checked?: false;
}

export interface TabProps extends DynamicTabProps {
 
}

export interface TabState {
  value : string | number;
  tabValue: string | number;
  items : Array<TabItem>
}

export interface TriggerFunction {
  (event: React.ChangeEvent<{}>, newValue: number): void;
}

export interface RenderPanel {
  (value?: any): any;
}

