
import React from 'react';

export interface ClListItem {
    label: string;
    value: number;
    checked: boolean;
    children?: Array<ClListItem>;
}
export interface ClListProps {
    items: Array<ClListItem>
}