import React, { FC } from "react";
import { Typography } from "@material-ui/core";
import { TabPanelProps } from "./_dataTypes";

const Title: FC<TabPanelProps> = (props) => {
  return (
    <Typography variant="body1" className={props.classes ? props.classes.spaced : ""}>
      {props.title ? props.title : ""}
    </Typography>
  );
};

export default Title;
export  * from './_dataTypes';