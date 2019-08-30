import React, { FC } from "react";
import { Tabs, Tab} from "@material-ui/core";
// import { makeStyles, createStyles, Theme } from "@material-ui/core";


import { TabItem, TabProps, TriggerFunction } from "./_dataTypes";
import Loading from "../../../Loading";
// import theme from "../../../../theme/muiTheme";

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     spaced: {
//       padding: theme.spacing(2),
//       fontWeight: "bold"
//     },
//     zeroIndicator: {
//       height: 0
//     }
//   })
// );

const getTabsList = (items: ReadonlyArray<TabItem>) => {
  const tabs: Array<any> = [];
  items.forEach((item: TabItem, key: number) =>
    tabs.push(
      <Tab
        key={"tab-" + key}
        style={{ zIndex: 1000 }}
        label={item.label}
      />
    )
  );
  return tabs;
};

const getTabs = (items: ReadonlyArray<TabItem>) => {
    return getTabsList(items);
};

const SimpleTabs: FC<TabProps> = (props) => {
  // const {tabItems, tabOnChange, tabValue, tabIndex, ...tabProps} = props;
  
  // const classes = useStyles();
  
  const changeTab: TriggerFunction = (
    event: React.ChangeEvent<{}>,
    tabIndex: number
  ) => {
    props.setTabIndex(tabIndex);
    props.setTabValue(props.tabItems[tabIndex].value);
  };
  return (
    <React.Fragment>
        { props.loading ?
            <Loading what="data"/>
            :
          <Tabs
          indicatorColor="secondary"
          value={props.tabIndex}
          onChange={changeTab}
          aria-label="simple tabs"
          variant="scrollable"
          scrollButtons="auto"
        >
          {getTabs(props.tabItems)}
        </Tabs>
        }
    </React.Fragment>
  );
};
export default SimpleTabs;
export * from "./_dataTypes";
