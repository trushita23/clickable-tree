import { DynamicTreeViewConfig } from '../../_dataTypes';
export interface ClListItem {
  label: string;
  value: string;
  checked: boolean;
  children?: Array<ClListItem>;
}

export interface CheckBoxTreeViewProps extends DynamicTreeViewConfig{
 
}

export interface CheckBoxTreeViewState {
  checked: Array<string | number>;
  open: Array<string | number>;
  search: string | number;
}

export interface PropertyObject {
  [name: string]: Array<string | number>;
}

export type ClTreeProps = {
  items: [];
};

export type ClTreeState = {
  checked: [];
  open: [];
};

export interface TriggerFunction {
  (event: React.ChangeEvent<{}>, newValue: number): void;
}

export interface CheckBoxTreeViewConfig {
  loading: boolean,
  title?: string;
  tabPanelUrl: string;
  updateButton?: boolean;
  updateButtonAction?: React.MouseEventHandler;
  updateButtonLabel?: string;
  onSelectItem?: Function;
}
export * from '../../_dataTypes'