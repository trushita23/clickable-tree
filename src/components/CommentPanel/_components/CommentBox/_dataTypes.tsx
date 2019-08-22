import React from "react";
import { CommentsProps } from '../../_datatypes';

export interface UserInfo {
  id: number;
  firstName: string;
  lastName: string;
  designation: string;
  profileImage: string;
}

export interface Comment {
  id: string;
  user: UserInfo;
  comment: string;
  resPros: string;
  resCons: string;
  scenarioRating: string;
  approval: string;
}



