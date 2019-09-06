import { AddCommentConfig } from '../../components/CreateComment';
import { CommentsProps} from '../../components/CommentPanel';

export const createCommentProps: AddCommentConfig = {
  ColumnName: ['Comments', 'Resolution Pros', 'Resolution Cons', 'Scenario Rating', 'Approval (Required)'],
  comment: '',
  resolutionPros: '',
  resolutionCons: '',
  rating: '',
  approval: '',
  loading: true,
  setComment: () => {},
  setResolutionPros: () => {},
  setResolutionCons: () => {},
  setScenario: () => {},
  setApproval: () => {},
  setRating: () => {},
  addComment: () => {},
  clearComment: () => {},
};

// props for comment panel

export const commentPanelProps: CommentsProps = {
  commentList:[],
  getCommentList: () => {},
  commentUrl: "http://localhost:3001/jda/comments",
  loading: true
};