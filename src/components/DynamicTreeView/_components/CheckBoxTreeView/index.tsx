import React, { FunctionComponent, Fragment } from "react";
import {
  Checkbox,
  List,
  ListItem,
  ListItemText,
  Collapse,
  Typography,
  TextField,
  makeStyles,
  createStyles,
  Button,
  Theme,
  IconButton,
  Box,
  Grid
} from "@material-ui/core";
import {
  AddBoxOutlined,
  IndeterminateCheckBoxOutlined,
  Remove,
  SaveSharp
} from "@material-ui/icons";
import { map, isArray, indexOf, compact } from "lodash";
import { CheckBoxTreeViewProps, CheckBoxTreeViewState, TreeNode } from "./_dataTypes";
import NodeModel from "./_nodeModel";
import Loading from "../../../Loading";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingLeft: theme.spacing(0)
    },
    nested: {
      paddingLeft: theme.spacing(4)
    },
    smallFont: {
      fontSize: 0.5
    },
    highlight: {
      background: theme.palette.secondary.light,
      padding: theme.spacing(0.3, 0, 0.3, 0.3)
    },
    listcontainer: {
      borderLeft: "1px solid",
      borderRight: "1px solid",
      borderBottom: "1px solid",
      height: theme.spacing(60),
      overflowY: "scroll"
    }
  })
);

const CheckBoxTreeView: FunctionComponent<CheckBoxTreeViewProps> = props => {
  const classes = useStyles();
  const updateButtonLabel = props.updateButtonLabel || "Update View";
  const initNodeData: CheckBoxTreeViewState = {
      checked: props.checkedItems || [],
      open: props.openItems || [],
      search: props.searchString || ""
    }
  let nodes: NodeModel = new NodeModel(props.treeItems, initNodeData);
  const handleOpen = (value: string | number) => () => {
    nodes.selectOpen(value);
    props.setOpen(nodes.open);
  };

  const handleToggle = (value: string | number) => () => {
    if (indexOf(props.checkedItems, value) === -1) {
      nodes.selectItems(value);
    } else {
      nodes.deSelectItems(value);
    }
    props.setChecked(nodes.checked);
  };

  const handleSearch = (name: string) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    props.setSearch(event.target.value);
  };
  const getFilterHighlight = (label: string) => {
    let text;
    const start = label.toLowerCase().indexOf(props.searchString.toLowerCase());
    if (props.searchString && start !== -1) {
      const end = start + `${props.searchString}`.length;
      text = (
        <ListItemText className={classes.smallFont} id={label}>
          {start === 0 ? "" : label.slice(0, start)}
          <span className={classes.highlight}>{label.slice(start, end)}</span>
          {label.slice(end)}
        </ListItemText>
      );
    } else {
      text = (
        <ListItemText id={label} className={classes.smallFont}>
          {label}
        </ListItemText>
      );
    }

    return text;
  };

  const getlist = (items?: Array<TreeNode>, depth: number = 0) => {
    depth++;
    const list = map(items, listItem => {
      return listItem ? (
        <Fragment key={`fragment-${listItem.value}`}>
          <ListItem key={listItem.value} role={undefined}>
            {props.collapsibelTreeView && (
              <IconButton onClick={handleOpen(listItem.value)} id={`ico-collapse-${listItem.value}`}>
                {isArray(listItem.children) && listItem.children.length > 0 ? (
                  props.openItems.indexOf(`${listItem.value}`) !== -1 ? (
                    <IndeterminateCheckBoxOutlined />
                  ) : (
                    <AddBoxOutlined />
                  )
                ) : (
                  <Remove />
                )}
              </IconButton>
            )}
            <Checkbox
              edge="start"
              checked={props.checkedItems.indexOf(listItem.value) !== -1 || props.checkedItems.indexOf('all') !== -1}
              tabIndex={-1}
              disableRipple={true}
              onClick={handleToggle(listItem.value)}
            />
            {getFilterHighlight(listItem.label)}
          </ListItem>
          <Collapse
            in={
              !props.collapsibelTreeView ||
              props.openItems.indexOf(`${listItem.value}`) !== -1
            }
          >
            {getlist(listItem.children, depth)}
          </Collapse>
        </Fragment>
      ) : null;
    });
    if (items && depth === 1 && props.showSelectAll) {
      const allitem = (
        <ListItem key="all" role={undefined}>
          <Checkbox
            edge="start"
            checked={props.checkedItems.indexOf("all") !== -1}
            tabIndex={-1}
            id="select-all"
            disableRipple
            onClick={handleToggle("all")}
          />
          <ListItemText id="all" primary="All" />
        </ListItem>
      );
      list.unshift(allitem);
    }

    return (
      <List className={depth > 1 ? classes.nested : classes.root}>
        {compact(list)}
      </List>
    );
  };
  const selectedCount: number = nodes.getSelectedCount();
  const list = nodes.filterItems.length ? getlist(nodes.filterItems) : [];
  const handleUpdateView: React.MouseEventHandler = (
    event: React.MouseEvent<Element, MouseEvent>
  ) => {
    if (props.updateButtonAction) {
      props.updateButtonAction(event);
    }
  };
  return (
    <React.Fragment>
      <Box className={classes.listcontainer}>{ props.loading ? <Loading/> : list}</Box>
      <Grid container>
        <Grid item xs={6}>
          <Box color={"text.disabled"}>
            <Typography variant="subtitle1">
              {selectedCount > 0
                ? `${selectedCount} node selected`
                : "None selected"}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Grid
            container
            justify="flex-end"
            direction="column"
            alignItems="flex-end"
          >
            <IconButton disableFocusRipple={true} disableRipple={true}>
              <SaveSharp />
            </IconButton>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Box color="text.disabled">
            <Typography variant="subtitle1">Clear All</Typography>
          </Box>
        </Grid>
      </Grid>
      <Box m={1}>
        <TextField
          id="search-string"
          label="Search"
          value={props.searchString || ""}
          onChange={handleSearch("name")}
          margin="dense"
          variant="outlined"
          fullWidth
        />
      </Box>
      <Box m={1}>
        {props.updateButton && (
          <Button
            onClick={handleUpdateView}
            id="update-view"
            variant="contained"
            color="primary"
            fullWidth
          >
            {updateButtonLabel}
          </Button>
        )}
      </Box>
    </React.Fragment>
  );
};

export * from "./_dataTypes";
export default CheckBoxTreeView;
