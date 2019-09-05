export interface AddCommentConfig {
    ColumnName: Array<string>;
    comment: string;
    resolutionPros: string;
    resolutionCons: string;
    rating: string;
    approval: string;
    loading: boolean;

    setComment: Function;
    setResolutionPros: Function;
    setResolutionCons: Function;
    setScenario: Function;
    setApproval: Function;
    setRating: Function;
    addComment: Function;
    clearComment: Function;
  };