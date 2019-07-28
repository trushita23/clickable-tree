export interface ClListItem {
    label: string;
    value: string;
    checked: boolean;
    children?: Array<ClListItem>;
}
export interface ClListProps {
    items: Array<ClListItem>
}