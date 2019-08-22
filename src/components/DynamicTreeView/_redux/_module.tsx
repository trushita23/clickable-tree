import { checkboxChecked } from './_reducers';
import { getTreeItems,loadChecklist} from './_saga'; 

export function getCheckBoxCheckedModule() {
    return {
        id: 'checkbox_checked',
        reducerMap:{
            treeviewState: checkboxChecked
        },
        sagas:[getTreeItems, loadChecklist]
    }
}