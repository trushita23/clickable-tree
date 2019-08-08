import React from 'react';
import { TabPanelProps } from './@dataTypes';
import { Paper,LinearProgress, MuiThemeProvider } from '@material-ui/core';
import { useFetch } from '../../../../hooks';
import {omit} from 'lodash';
import CheckBoxTreeView from '../../../CheckboxTreeview'
import  theme from '../../../../theme/muiTheme';

  export const TabPanel: React.FC<TabPanelProps> = (props) => {
    theme.palette.secondary.main = props.secondaryColor;
    const [tabItems, Loading] = useFetch(`${props.tabPanelUrl}/${props.value}`,[{label:"", value:""}])  
    if(Loading) {
      return <Paper>"Loading..."<LinearProgress /></Paper>;
    } else {
      return (<MuiThemeProvider theme={theme}><CheckBoxTreeView items={tabItems} {...omit(props, 'tabPanelUrl')}></CheckBoxTreeView></MuiThemeProvider>);
    }

  }

  export * from './@dataTypes';