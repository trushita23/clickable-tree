// TODO: Need to mention comments info for unit test cases.
import { CommentData } from "../../CommentList/_dataTypes";

export const initialProps: CommentData = {
            id: 1,
            user: {
                id:1,
                firstName: 'Alex',
                lastName: 'Taylor',
                profileImage: 'img/man.svg'
            },
            comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            resPros: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            resCons: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            scenarioRating: 'img/like.svg',
            approval: 'NA'

};
