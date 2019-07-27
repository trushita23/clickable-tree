import React from 'react';
import { TabPanelProps } from './@dataTypes';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export const TabPanel: React.FC<TabPanelProps> =  (props) => {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        <Box p={3}>{children}</Box>
      </Typography>
    );
  }

  export * from './@dataTypes';