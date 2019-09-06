import React from "react";
import { makeStyles, createStyles, Theme, TableCell, TableRow } from "@material-ui/core";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      marginTop: theme.spacing(1),
      overflowX: "auto",
      borderBottom: "1px"
    },
    columnText:{
      width: '20%',
      fontSize: '0.9rem',
      color: '#000000',
      border: 'none'
    },
    columnButtons:{
        width: '14%',
        padding: '0.5%',
        fontSize: '0.9rem',
        color: '#000000',
        border: 'none'
      },
    head: {
      fontSize: ".7rem"
    }
  })
);
export const CommentHeading = (props:any) => {
    const classes = useStyles();
    return(
        <TableRow>
            {
                props.ColumnName.map((column:string, index:number)=>{
                    return (
                        <TableCell className={index < 3 ? classes.columnText : classes.columnButtons} key={index}>{column}</TableCell>
                    )
                })
            }
          </TableRow>
    );
};
