import React from "react";
import { makeStyles, createStyles, Theme, Box, Button} from "@material-ui/core";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
        img: {
            fontSize:50,
            margin:'2%',
            cursor: 'pointer'
        },
        button: {
          margin: theme.spacing(.5),
        }
    })
);
const handleAddComment = (props:any) => {
    // let initialState = {
    //   comment: 'props.comment',
    //   resolutionPros: 'props.resolutionPros',
    //   resolutionCons: 'props.resolutionCons',
    //   rating: 'tup',
    //   approval: 'approve',
    // };
    // props.setCommentsState(initialState);
    let initialState = {
        comment: props.comment,
        resolutionPros: props.resolutionPros,
        resolutionCons: props.resolutionCons,
        rating: props.rating,
        approval: props.approval,
      };
    console.log('Handle Submit Action', initialState);
}
  
const handleClearComment = (props:any) => {
    props.clearComment();
}
export const CommentButtons = (props:any) => {
    const classes = useStyles();
    const cancelButtonLabel = "cancel";
    const submitButtonLabel = "submit";
    return (
        <Box m={1} display="flex" justifyContent="flex-end">
          <Button variant="contained" color="primary" className={classes.button} onClick={() => handleClearComment(props)}>
            {cancelButtonLabel}
          </Button>
          <Button variant="contained" color="primary" className={classes.button} onClick={() => handleAddComment(props)}>
            {submitButtonLabel}
          </Button>
      </Box>
    );
};