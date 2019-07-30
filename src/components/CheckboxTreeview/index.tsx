import React, { FunctionComponent } from  'react';
import CollapsibleListWithCheckBox, { ClListItem } from './_components/CollapsibleListWithCheckBox';

interface CheckBoxTreeViewItem {
    label : string;
}
interface CheckBoxTreeViewProps {
    items : Array<ClListItem>
}

const CheckBoxTreeView : FunctionComponent<CheckBoxTreeViewProps> = (props) => {
    return (<CollapsibleListWithCheckBox items={props.items}></CollapsibleListWithCheckBox>);
}

export default CheckBoxTreeView;