import createComment from './_reducers';

export function createCommentModule() {
    return {
        id: 'create_comment',
        reducerMap:{
            createCommentState: createComment
        }
    }
}