import commentDisplay from './_reducers';
import { commentAsync,getCommentList} from './_saga'; 

export function getCommentModule() {
    return {
        id: 'comment_display',
        reducerMap:{
            commentState: commentDisplay
        },
        sagas:[commentAsync, getCommentList]
    }
}