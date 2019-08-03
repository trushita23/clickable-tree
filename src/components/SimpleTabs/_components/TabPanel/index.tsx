import React from 'react';
import { TabPanelProps } from './@dataTypes';
import { Paper,LinearProgress } from '@material-ui/core';
import { useFetch } from '../../../../hooks';
import {omit} from 'lodash';
import CheckBoxTreeView from '../../../CheckboxTreeview'

  export const TabPanel: React.FC<TabPanelProps> = (props) => {

    const [tabItems, Loading] = useFetch(`${props.tabPanelUrl}/${props.value}`,[{label:"", value:""}])  
    if(Loading) {
      return <Paper>"Loading..."<LinearProgress /></Paper>;
    } else {
      return <CheckBoxTreeView items={tabItems} {...omit(props, 'tabPanelUrl')}></CheckBoxTreeView>
    }

  }

  export * from './@dataTypes';