import { CommentsProps } from "../_datatypes";

export const initialProps: CommentsProps = {
  commentList: [
    {
      id: '1',
      user: {
        id: 1,
        firstName: 'Alex',
        lastName: 'Taylor',
        profileImage: 'img/man.svg'
      },
      comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      resPros: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      resCons: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      scenarioRating: 'img/like.svg',
      approval: 'NA'
    },
    {
      id: '2',
      user: {
        id: 1,
        firstName: 'John',
        lastName: 'Brown',
        profileImage: 'img/man.svg'
      },
      comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      resPros: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      resCons: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      scenarioRating: 'img/dislike.svg',
      approval: 'NA'
    }
  ],
  commentUrl: '',
  getCommentList: () => { },
  loading: true,

};

export const Comment = [
  {
    id: '1',
    user: {
      id: 1,
      firstName: 'Alex',
      lastName: 'Taylor',
      profileImage: 'img/man.svg'
    },
    comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    resPros: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    resCons: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    scenarioRating: 'img/like.svg',
    approval: 'NA'
  },
  {
    id: '2',
    user: {
      id: 1,
      firstName: 'John',
      lastName: 'Brown',
      profileImage: 'img/man.svg'
    },
    comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    resPros: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    resCons: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    scenarioRating: 'img/dislike.svg',
    approval: 'NA'
  }
];