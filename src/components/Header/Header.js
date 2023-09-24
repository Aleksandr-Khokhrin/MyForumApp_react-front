import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";



import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './HeaderStyles';

import DrawerMenu from './Drawer';

const Header = (props) => {
    const userData = useSelector((state) => state.auth.data);
    const classes = useStyles();
    const [drawerState, setDrawerState] = useState(false);

    useEffect(() => {
        // console.log(userData?.userData.fullName)
        // console.log(userData?.userData.fullName)
    }, [userData])

    const openBurger = () => {
        setDrawerState(true);
    }
    const closeDrawer = () => {
        setDrawerState(false);
    }

    const saveClickDataHandler = (chooseCategory) => {
        props.onSaveClickData(chooseCategory)
    }


    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                        onClick={openBurger}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography className={classes.title} variant="h6" noWrap>
                        {userData && userData.userData && userData.userData.fullName !== undefined ? `Hello, ${userData.userData.fullName}!` : "Excio-FM"}                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                </Toolbar>
            </AppBar>
            <DrawerMenu onSaveClickData={saveClickDataHandler} open={drawerState} toggleDrawer={closeDrawer} />
            {/* <DrawerMenu userData={props.userData} userStatePage={props.userStatePage} onSaveClickData={saveClickDataHandler} open={drawerState} toggleDrawer={closeDrawer} /> */}
        </div>
    );
};


export default Header;
