import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from 'react-i18next';



import { useTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import AssignmentIcon from '@material-ui/icons/Assignment';
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';
import FormatIndentIncreaseOutlinedIcon from '@material-ui/icons/FormatIndentIncreaseOutlined';
import MenuBookTwoToneIcon from '@material-ui/icons/MenuBookTwoTone';
import MovieOutlinedIcon from '@material-ui/icons/MovieOutlined';
import VideogameAssetOutlinedIcon from '@material-ui/icons/VideogameAssetOutlined';


import Typography from '@material-ui/core/Typography';
import useStyles from './DrawerStyles';


const DrawerMenu = (props) => {
    const userData = useSelector((state) => state.auth.data);
    const classes = useStyles();
    const theme = useTheme();
    const { open, toggleDrawer } = props;
    const [categoryState, setCategoryState] = useState('')
    const [userName, setUserName] = useState('')
    const { t } = useTranslation()
    const categoryClick = (event) => {
        const newCategory = event.target.textContent;
        setCategoryState(newCategory);
    }
    useEffect(() => {
    }, [categoryState]);

    const wrapRef = useRef(null)
    const handleClick = (event) => {
        if (wrapRef.current && !wrapRef.current.contains(event.target)) {
            props.toggleDrawer()
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
                        <div className={classes.userNameBox}>
                            Excio-FM
                        </div>
                        <IconButton onClick={toggleDrawer}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        {userData === null
                            ? <Link to='/login' className={classes.link}>
                                <ListItem button>
                                    <ListItemIcon><AccountBoxOutlinedIcon /></ListItemIcon>
                                    <ListItemText primary={t('login')} />
                                </ListItem>
                            </Link>
                            : <Link to='/profile' className={classes.link}>
                                <ListItem button>
                                    <ListItemIcon><AccountBoxOutlinedIcon /></ListItemIcon>
                                    <ListItemText primary={t('myProfile')} />
                                </ListItem>
                            </Link>
                        }

                        <Link to='/' className={classes.link}>
                            <ListItem button>
                                <ListItemIcon><FormatIndentIncreaseOutlinedIcon /></ListItemIcon>
                                <ListItemText primary={t('mainPage')} />
                            </ListItem>
                        </Link>
                    </List>
                    <Divider />
                    <List>
                        <Typography className={classes.title} variant="h6">
                            Category:
                        </Typography>
                        <Link to='/Books' className={classes.link}>
                            <ListItem button>
                                <ListItemIcon><MenuBookTwoToneIcon /></ListItemIcon>
                                <ListItemText primary={t('books')} />
                            </ListItem>
                        </Link>
                        <Link to='/Films' className={classes.link}>
                            <ListItem button>
                                <ListItemIcon><MovieOutlinedIcon /></ListItemIcon>
                                <ListItemText primary={t('films')} />
                            </ListItem>
                        </Link>
                        <Link to='/Games' className={classes.link}>
                            <ListItem button>
                                <ListItemIcon><VideogameAssetOutlinedIcon /></ListItemIcon>
                                <ListItemText primary={t('games')} />
                            </ListItem>
                        </Link>
                        {userData ? <Link to='/My reviews' className={classes.link}>
                            <ListItem button>
                                <ListItemIcon><AssignmentIcon /></ListItemIcon>
                                <ListItemText primary={t('myReviews')} />
                            </ListItem>
                        </Link> : ''}
                    </List>
                </Drawer>
            </div>
        </div>

    );
};


export default DrawerMenu;
