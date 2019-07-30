export interface ClListItem {
    label: string;
    value: string;
    checked: boolean;
    children?: Array<ClListItem>;
}
export interface ClListProps {
    items: Array<ClListItem>
}

export interface ClListState {
    checked: Array<string|number>;
    open : Array<string|number>; 
    search : string| number;
}

export interface PropertyObject {
    [ name: string ]: Array<string|number>;
}

export type ClTreeProps = {
    items: []
}

export type ClTreeState = {
    checked: [],
    open: []
}
