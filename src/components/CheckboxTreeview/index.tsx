import React, { FunctionComponent } from  'react';
import CollapsibleListWithCheckBox, { ClListItem } from './_components/CollapsibleListWithCheckBox';

interface CheckBoxTreeViewProps {
    items : Array<ClListItem>,
    collapsibelTreeView?: boolean,
    showSelectAll?: boolean,
    updateButton? : false,
    updateButtonAction?: React.MouseEventHandler,
    updateButtonLabel?: string
}

const CheckBoxTreeView : FunctionComponent<CheckBoxTreeViewProps> = (props) => {
    return (<CollapsibleListWithCheckBox {...props}></CollapsibleListWithCheckBox>);
}

export default CheckBoxTreeView;