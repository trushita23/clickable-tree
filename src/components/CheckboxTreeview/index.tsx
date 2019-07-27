import React, { FunctionComponent, Children} from 'react';
import CollapsibleListWithCheckBox, { ClListProps, ClListItem } from './_components/CollapsibleListWithCheckBox';


interface CheckBoxTreeViewItem {
    label : string;
}
interface CheckBoxTreeViewProps {
    items? : Array<CheckBoxTreeViewItem>
}

const CheckBoxTreeView : FunctionComponent<CheckBoxTreeViewProps> = (props) => {
    let productItem : ClListItem;
    let childItem : ClListItem;
    let itemList : Array<ClListItem> = [];
    let childItems : Array<ClListItem> = [];
    for(let i =1; i<11; i++) {
        for(let j =1; j<3; j++) {
            childItem = {
                label : `Item ${i}.${j}`,
                value : i + (j/10),
                checked : false
            }
            childItems.push(childItem)
        }
        productItem = {
            label : `Item ${i}`,
            value : i,
            checked : false,
            children: childItems
        }
        childItems = [];
        itemList.push(productItem);
    }
    console.log(itemList);
    return (<CollapsibleListWithCheckBox items={itemList}></CollapsibleListWithCheckBox>);
}

export default CheckBoxTreeView;