import React, { FunctionComponent } from  'react';
import CollapsibleListWithCheckBox, { ClListItem } from './_components/CollapsibleListWithCheckBox';

interface CheckBoxTreeViewProps {
    items : Array<ClListItem>,
    collapsibelTreeView?: boolean,
    showSelectAll?: boolean
}

const CheckBoxTreeView : FunctionComponent<CheckBoxTreeViewProps> = (props) => {
    return (<CollapsibleListWithCheckBox items={props.items}></CollapsibleListWithCheckBox>);
}

export default CheckBoxTreeView;