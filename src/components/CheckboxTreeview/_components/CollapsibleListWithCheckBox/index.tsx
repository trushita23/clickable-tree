import React, { FunctionComponent, Fragment} from 'react';
import { Checkbox, 
    List, 
    ListItem, 
    ListItemIcon, 
    ListItemText, 
    Collapse, 
    makeStyles, 
    createStyles,
    Theme} from '@material-ui/core';
import { ExpandMoreOutlined, ExpandLessOutlined, RemoveOutlined } from '@material-ui/icons';
import { map, find, isArray, forEach, compact, indexOf, keys, remove, intersection } from 'lodash';
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
    },
  }),
);

const CheckBoxList: FunctionComponent<ClListProps> = (props) => {
    const classes = useStyles();
    const parentsToChild : any = {};
    const childrenToParents : any = {};
    forEach(props.items, item => {
        if(item.children) {
            forEach(item.children, child => {
               childrenToParents[child.value] = item.value; 
                if(indexOf(keys(parentsToChild), `${item.value}`) >= 0) {
                    if(indexOf(parentsToChild[item.value], child.value) === -1) {
                        parentsToChild[item.value].push(child.value);
                    }
                } else {
                    parentsToChild[item.value] = [child.value]
                }
            })
        }
    })
    const [checked, setChecked] = React.useState([0]);
    const [open, setOpen] = React.useState([0]);
    
    const handleOpen = (value: any) => () => {
        const currentIndex = open.indexOf(value);
        const newOpen = [...open];

        if (currentIndex === -1) {
            newOpen.push(value);
        } else {
            remove(newOpen, (i,j) => currentIndex === j);
        }
        setOpen(newOpen);
    };

    const handleToggle = (value: any) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = compact([...checked]);
        const parent = childrenToParents[value];
        const children = parentsToChild[value];
        const childrenOfParent = parentsToChild[parent];

        console.log(children);
        if (currentIndex === -1) {
            newChecked.push(value);
            // Push the parent item to be checked
            if(checked.indexOf(parent) === -1) {
                newChecked.push(parent)
            }
            // Select all the child elements
            forEach(children, child => {
                if(checked.indexOf(child) === -1) {
                    newChecked.push(child)
                }
            })
        } else {
            remove(newChecked, (i,j) => currentIndex === j);
            // Uncheck all children
            let childIndex: number;

            forEach(children, child => {
                childIndex = newChecked.indexOf(child);
                if(childIndex !== -1) {
                    remove(newChecked, (i,j) => childIndex === j);
                }
            })

            // if None of he children are checked then uncheck the parent
            let parentIndex: number;

            if(intersection(childrenOfParent, newChecked).length === 0) {
                parentIndex = newChecked.indexOf(parent);
                if(parentIndex !== -1) {
                    remove(newChecked, (i,j) => parentIndex === j);
                }
            }
            

        }
        setChecked(compact(newChecked));
    };

    const isChecked = (iterable: any, value: any) => {
        console.log(find(iterable, value) ? true : false);
        return find(iterable, value) ? true : false;
    }
    const getlist = (items?: Array<ClListItem>, depth : number = 0) => {
       
        depth++;
        const list = map(items, listItem => {
            return (
                <Fragment>
                    <ListItem key={listItem.value} role={undefined} >
                        <ListItemIcon onClick={handleOpen(listItem.value)}>
                            {isArray(listItem.children) && open.indexOf(listItem.value) !== -1 ? <ExpandLessOutlined /> : <ExpandMoreOutlined /> }
                        </ListItemIcon>
                        <ListItemIcon>
                        <Checkbox
                            edge="start"
                            checked={checked.indexOf(listItem.value) !== -1}
                            tabIndex={-1}
                            disableRipple
                            onClick={handleToggle(listItem.value)}
                        />
                        </ListItemIcon>
                        <ListItemText id={listItem.label} primary={`${listItem.label}`} />
                    </ListItem>
                    <Collapse in={open.indexOf(listItem.value) !== -1}>
                    {getlist(listItem.children, depth)}
                    </Collapse>
                
                </Fragment>
                )
        });
       return (<List  className={depth > 1 ? classes.nested : classes.root}>{list}</List>)
        
        
    }

    const list = getlist(props.items);
    return (
        <React.Fragment>
            {list}
        </React.Fragment>
    )
} 
export * from './_dataTypes';
export default CheckBoxList;