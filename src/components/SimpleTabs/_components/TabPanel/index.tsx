import React from 'react';
import { TabPanelProps } from './_dataTypes';
import { Paper,LinearProgress, MuiThemeProvider } from '@material-ui/core';
import { useFetch } from '../../../../hooks';
import {omit} from 'lodash';
import CheckBoxTreeView from '../../../CheckBoxTreeView'
import  theme from '../../../../theme/muiTheme';

  export const TabPanel: React.FC<TabPanelProps> = (props) => {
    theme.palette.secondary.main = props.secondaryColor;
    const [tabItems, loading] = useFetch(`${props.tabPanelUrl}/${props.value}`,[{label:"", value:""}])  
    if(loading) {
      return <Paper>"Loading..."<LinearProgress /></Paper>;
    } else {
      return (<MuiThemeProvider theme={theme}><CheckBoxTreeView items={tabItems} {...omit(props, 'tabPanelUrl')}></CheckBoxTreeView></MuiThemeProvider>);
    }
  }

  export * from './_dataTypes';