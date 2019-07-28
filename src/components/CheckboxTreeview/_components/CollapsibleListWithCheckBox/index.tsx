import React, { FunctionComponent, Fragment } from 'react';
import {
    Checkbox,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Collapse,
    Typography,
    makeStyles,
    createStyles,
    Theme
} from '@material-ui/core';
import { AddBoxOutlined, IndeterminateCheckBoxOutlined, Remove } from '@material-ui/icons';
import { map, isArray, forEach, compact, indexOf, keys, remove, intersection, union } from 'lodash';
import { ClListProps, ClListItem } from './_dataTypes';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
        },
        nested: {
            paddingLeft: theme.spacing(4),
        }
    }),
);
const getParentsToChild = (items: any, parentsToChild: any) => {
    forEach(items, item => {
        if (item.children) {
            forEach(item.children, child => {
                if (indexOf(keys(parentsToChild), `${item.value}`) >= 0) {
                    if (indexOf(parentsToChild[item.value], child.value) === -1) {
                        parentsToChild[item.value].push(child.value);
                        if (item.children && item.children.length) {
                            getParentsToChild(item.children, parentsToChild)
                        }
                    }
                } else {
                    parentsToChild[item.value] = [child.value];
                    if (item.children && item.children.length) {
                        getParentsToChild(item.children, parentsToChild)
                    }
                }
            })
        }
    })
    return parentsToChild;
}
const getchildrenToParents = (items: any, childrenToParents: any, parent?: any) => {
    forEach(items, item => {
        if (item.children) {
            forEach(item.children, child => {
                if (childrenToParents[child.vaue]) {
                    if (indexOf(childrenToParents[child.value], item.value) === -1) {
                        childrenToParents[child.value].push(item.value);
                    }
                } else {
                    childrenToParents[child.value] = [item.value]
                }
                if (childrenToParents[item.value]) {
                    childrenToParents[child.value] = union(childrenToParents[child.value], childrenToParents[item.value])
                }
                if (child.children && child.children.length) {
                    getchildrenToParents(child.children, childrenToParents, child.value);
                }


            })
        } else {
            if (parent) {
                if (childrenToParents[item.vaue]) {
                    if (indexOf(childrenToParents[item.value], parent) === -1) {
                        childrenToParents[item.value].push(parent);
                    }
                } else {
                    childrenToParents[item.value] = [parent]
                }
                if (childrenToParents[parent]) {
                    childrenToParents[item.value] = union(childrenToParents[item.value], childrenToParents[parent])
                }
            }
        }
    })
    return childrenToParents;
}
const getAll = (items: any, allValues: any) => {
    forEach(items, item => {
        if(indexOf(allValues, item.value) === -1) {
            allValues.push(item.value)
        }
        if(item.children && item.children.length) {
            getAll(item.children, allValues);
        }
    })
}
const CheckBoxList: FunctionComponent<ClListProps> = (props) => {
    const classes = useStyles();
    const parentsToChild: any = {};
    const childrenToParents: any = {};
    const allValues: any = ['all'];
    const [checked, setChecked] = React.useState(['']);
    const [open, setOpen] = React.useState(['']);
    getParentsToChild(props.items, parentsToChild);
    getchildrenToParents(props.items, childrenToParents);
    getAll(props.items, allValues);
    const handleOpen = (value: any) => () => {
        let currentIndex: any;
        let newOpen: Array<any>;
        currentIndex = open.indexOf(`${value}`);
        newOpen = compact([...open]);

        if (currentIndex === -1) {
            if (isArray(parentsToChild[value]) && parentsToChild[value].length > 0) {
                newOpen.push(`${value}`);
            }
        } else {
            remove(newOpen, (i, j) => currentIndex === j);
        }
        setOpen(newOpen);
    };

    const handleToggle = (value: any) => () => {
        const currentIndex = checked.indexOf(value);
        let newChecked: any;
        const parents = childrenToParents[value];
        const children = parentsToChild[value];
        let childrenOfParent;
        if(value === 'all') {
            if(currentIndex === -1) {
                newChecked = allValues;
            } else {
                newChecked = [];
            }
        } else {
            newChecked = compact([...checked]);
            if (currentIndex === -1) {
                newChecked.push(value);
                // Push the parent item to be checked
                forEach(parents, parent => {
                    if (checked.indexOf(parent) === -1) {
                        newChecked.push(parent)
                    }
                })
                // Select all the child elements
                forEach(children, child => {
                    if (checked.indexOf(child) === -1) {
                        newChecked.push(child)
                    }
                })
            } else {
                remove(newChecked, (i, j) => currentIndex === j);
                // Uncheck all children
                let childIndex: number;
    
                forEach(children, child => {
                    childIndex = newChecked.indexOf(child);
                    if (childIndex !== -1) {
                        remove(newChecked, (i, j) => childIndex === j);
                    }
                })
                let parentIndex: number;
                forEach(parents, parent => {
                    childrenOfParent = parentsToChild[parent];
                    if (intersection(childrenOfParent, newChecked).length === 0) {
                        parentIndex = newChecked.indexOf(parent);
                        if(parentIndex !== -1) {
                            remove(newChecked, (i,j) => parentIndex === j);
                        }
                    }
                })
    
    
            }
        }
        
        setChecked(compact(newChecked));
    };

    const getlist = (items?: Array<ClListItem>, depth: number = 0) => {

        depth++;
        const list = map(items, listItem => {
            return (
                <Fragment key={`fragment-${listItem.value}`}>
                    <ListItem key={listItem.value} role={undefined} >
                        <ListItemIcon onClick={handleOpen(listItem.value)}>
                            {isArray(listItem.children) && listItem.children.length > 0 ? (open.indexOf(`${listItem.value}`) !== -1 ? <IndeterminateCheckBoxOutlined /> : <AddBoxOutlined />) : <Remove />}
                        </ListItemIcon>
                        <ListItemIcon>
                            <Checkbox
                                edge="start"
                                checked={checked.indexOf(`${listItem.value}`) !== -1}
                                tabIndex={-1}
                                disableRipple
                                onClick={handleToggle(listItem.value)}
                            />
                        </ListItemIcon>
                        <ListItemText id={listItem.label} primary={`${listItem.label}`} />
                    </ListItem>
                    <Collapse in={open.indexOf(`${listItem.value}`) !== -1}>
                        {getlist(listItem.children, depth)}
                    </Collapse>
                </Fragment>
            )
        });
        if (depth === 1) {
            const allitem = (<ListItem key='all' role={undefined} >
                <ListItemIcon onClick={handleOpen('all')}>
                    <IndeterminateCheckBoxOutlined />
                </ListItemIcon>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={checked.indexOf("all") !== -1}
                        tabIndex={-1}
                        disableRipple
                        onClick={handleToggle('all')}
                    />
                </ListItemIcon>
                <ListItemText id="all" primary="All" />
            </ListItem>)
            list.unshift(allitem);
        }
        return (<List className={depth > 1 ? classes.nested : classes.root}>{list}</List>)


    }

    const list = getlist(props.items);
    return (
        <React.Fragment>
            {list}
            <Typography variant="subtitle1">
                {checked.length && checked[0] ? `${checked.length} node selected`: ""}
            </Typography>
        </React.Fragment>
    )
}

export * from './_dataTypes';
export default CheckBoxList;