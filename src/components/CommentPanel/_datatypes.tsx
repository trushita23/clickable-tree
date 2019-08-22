export interface UserInfo {
  id: number;
  firstName: string;
  lastName: string;
  designation: string;
  profileImage: string;
}

export interface Comments {
  id: string;
  user: UserInfo;
  comment: string;
  resPros: string;
  resCons: string;
  scenarioRating: string;
  approval: string;
}

export interface CommentsProps  {
  commentList: ReadonlyArray<Comments>; 
  commentUrl: string;
  getCommentList: Function;
  loading: boolean;
}
