import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';
import FormatIndentIncreaseOutlinedIcon from '@material-ui/icons/FormatIndentIncreaseOutlined';
import MenuBookTwoToneIcon from '@material-ui/icons/MenuBookTwoTone';
import MovieOutlinedIcon from '@material-ui/icons/MovieOutlined';
import VideogameAssetOutlinedIcon from '@material-ui/icons/VideogameAssetOutlined';


import Typography from '@material-ui/core/Typography';
import useStyles from './DrawerStyles';


const DrawerMenu = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const { open, toggleDrawer } = props;
    const [categoryState, setCategoryState] = useState('')
    const categoryClick = (event) => {
        const newCategory = event.target.textContent;
        setCategoryState(newCategory);
    }
    useEffect(() => {
        props.onSaveClickData(categoryState)
    }, [categoryState]);
   
    const wrapRef = useRef(null)
    const handleClick = (event) => {
        if (wrapRef.current && !wrapRef.current.contains(event.target)) {
            props.toggleDrawer()
            // console.log('click')
        }
    }
    useEffect(() => {
        document.addEventListener('mousedown', handleClick)
        return () => {
            document.addEventListener('mousedown', handleClick)
        }
    }, [wrapRef])


    return (
        <div className='wrapper' ref={wrapRef}>
            <div className={classes.root}>
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.drawerHeader}>
                            Excio-FM
                        <IconButton onClick={toggleDrawer}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        {[props.userStatePage, 'Main Page'].map((text, index) => (
                            <ListItem button key={text} onClick={categoryClick}>
                                <ListItemIcon>{index % 2 === 0 ? <AccountBoxOutlinedIcon /> : <FormatIndentIncreaseOutlinedIcon />}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        <Typography className={classes.title} variant="h6">
                            Categories:
                        </Typography>
                        {['Books', 'Films', 'Games'].map((text, index) => (
                            <ListItem button key={text} onClick={categoryClick}>
                                <ListItemIcon>{index === 0 ? <MenuBookTwoToneIcon /> : index === 1 ? <MovieOutlinedIcon /> : <VideogameAssetOutlinedIcon />}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
            </div>
        </div>

    );
};


export default DrawerMenu;
