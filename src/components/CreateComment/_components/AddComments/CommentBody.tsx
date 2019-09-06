import React from "react";
import { makeStyles, createStyles, Theme, TableRow, TableCell, TextField } from "@material-ui/core";
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
        column:{
            border: 'none'
        },
        textField: {
            width: '100%',
            marginLeft: 'auto',
            marginRight: 'auto',
            color: 'white',
            padding: 0,
            margin: 0,
            fontWeight: 500,
            border: '1px solid gray',
            borderRadius: '0.5rem'
        },
        img: {
            fontSize:50,
            margin:'2%',
            cursor: 'pointer'
        }
    })
);

const commentHandler = (comment:string, props:any) => {
    props.setComment(comment);
}

const resolutionProsHandler = (resolutionPros:string, props:any) => {
    props.setResolutionPros(resolutionPros);
}

const resolutionConsHandler = (resolutionCons:string, props:any) => {
    props.setResolutionCons(resolutionCons);
}

const ratingHandler = (rating:string, props:any) => {
    props.setRating(rating);
}

const approvalHandler = (approval:string, props:any) => {
    props.setApproval(approval);
}



export const CommentBody = (props:any) => {
    const classes = useStyles();
    return (
        <TableRow>
            <TableCell className={classes.column}>
                <TextField multiline rows="4" margin="normal" className={classes.textField} fullWidth
                    InputProps={{disableUnderline: true}}
                    onChange={(e) => commentHandler(e.target.value, props)}
                    value={props && props.comment ? props.comment : ''}
                />
            </TableCell>
            <TableCell className={classes.column}>
                <TextField multiline rows="4" margin="normal" className={classes.textField} fullWidth
                    InputProps={{disableUnderline: true}}
                    onChange={(e) => resolutionProsHandler(e.target.value, props)}
                    value={props && props.setResolutionPros ? props.resolutionPros : ''}
                />
            </TableCell>
            <TableCell className={classes.column}>
                <TextField multiline rows="4" margin="normal" className={classes.textField} fullWidth
                    InputProps={{disableUnderline: true}}
                    onChange={(e) => resolutionConsHandler(e.target.value, props)}
                    value={props && props.resolutionCons ? props.resolutionCons : ''}
                />
            </TableCell>
            <TableCell className={classes.column}>
                <ThumbUpAltOutlinedIcon fontSize="large" color={props.rating === 'tup' ? 'primary': 'disabled'}  className={classes.img} onClick={() => ratingHandler('tup', props)} />
                <ThumbDownOutlinedIcon fontSize="large" color={props.rating === 'tdown' ? 'primary': 'disabled'} className={classes.img} onClick={() => ratingHandler('tdown', props)} />
            </TableCell>
            <TableCell className={classes.column}>
                <CheckCircleOutlinedIcon fontSize="large" color={props.approval === 'approve' ? 'primary': 'disabled'} className={classes.img} onClick={() => approvalHandler('approve', props)} />
                <CancelOutlinedIcon fontSize="large" color={props.approval === 'reject' ? 'primary': 'disabled'} className={classes.img} onClick={() => approvalHandler('reject', props)} />
            </TableCell>
        </TableRow>
    );
};