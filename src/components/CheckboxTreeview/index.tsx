import React, { FunctionComponent } from  'react';
import CollapsibleListWithCheckBox, { ClListItem } from './_components/CollapsibleListWithCheckBox';


interface CheckBoxTreeViewItem {
    label : string;
}
interface CheckBoxTreeViewProps {
    items? : Array<CheckBoxTreeViewItem>
}

const CheckBoxTreeView : FunctionComponent<CheckBoxTreeViewProps> = (props) => {
    let productItem : ClListItem;
    
    let itemList : Array<ClListItem> = [];
    let childItem : ClListItem;
    let childItems : Array<ClListItem> = [];
    let childItem1 : ClListItem;
    let childItems1 : Array<ClListItem> = [];
    // let childItem2 : ClListItem;
    // let childItems2 : Array<ClListItem> = [];
    for(let i =1; i<11; i++) {
        for(let j =1; j<3; j++) {
            for(let k =1; k<3; k++) {
                childItem1 = {
                    label : `Item ${i}.${j}.${k}`,
                    value : `${i}.${j}.${k}`,
                    checked : false
                }
                childItems1.push(childItem1)
            }
            childItem = {
                label : `Item ${i}.${j}`,
                value : `${i}.${j}`,
                checked : false,
                children: j%2 ? childItems1 : []
            }
            childItems1 = [];
            childItems.push(childItem)
        }
        productItem = {
            label : `Item ${i}`,
            value : `${i}`,
            checked : false,
            children: i%2 ? childItems : []
        }
        childItems = [];
        itemList.push(productItem);
    }
    return (<CollapsibleListWithCheckBox items={itemList}></CollapsibleListWithCheckBox>);
}

export default CheckBoxTreeView;