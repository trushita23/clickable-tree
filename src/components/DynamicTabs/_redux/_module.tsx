import { tabTransition } from './_reducers';
import { tabTransitionAsync,getTabList} from './_saga'; 

export function getTabTransitionModule() {
    return {
        id: 'tab_transition',
        reducerMap:{
            tabState: tabTransition
        },
        sagas:[tabTransitionAsync, getTabList]
    }
}