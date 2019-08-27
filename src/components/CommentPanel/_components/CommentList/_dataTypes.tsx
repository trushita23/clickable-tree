export interface UserInfo {
  id: number;
  firstName: string;
  lastName: string;
  designation: string;
  profileImage: string;
}

export interface CommentData {
  id: string;
  user: UserInfo;
  comment: string;
  resPros: string;
  resCons: string;
  scenarioRating: string;
  approval: string;
}



