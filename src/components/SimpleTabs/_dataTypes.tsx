import React from 'react';

export interface TabItem {
    label: string,
    value : string,
    a11y?: string,
    checked?: false
}


export interface TabProps {
    items: ReadonlyArray<TabItem>;
    handleChange?: TriggerFunction;
    renderPanel?: RenderPanel;
}

export interface TriggerFunction {
    (event: React.ChangeEvent<{}>, newValue: number): void;
}

export interface RenderPanel {
    (value?: any): any;
}