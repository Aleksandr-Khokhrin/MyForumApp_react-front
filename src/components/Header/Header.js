import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../../i18n/LanguageSwitcher/LanguageSwitcher';
import { Navigate } from "react-router-dom";

import { Link } from 'react-router-dom';
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
    const { t } = useTranslation();

    const userData = useSelector((state) => state.auth.data);
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();
    const [drawerState, setDrawerState] = useState(false);
    const [searchArray, setSearchArray] = useState('');
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        console.log(searchArray)
    }, [userData, searchArray, searchText, posts])

    const openBurger = () => {
        setDrawerState(true);
    }
    const closeDrawer = () => {
        setDrawerState(false);
    }

    const saveClickDataHandler = (chooseCategory) => {
        props.onSaveClickData(chooseCategory)
    }

    const searchValueHandler = (event) => {
        setSearchText(event.target.value)
        if (event.target.value === '') {
            setSearchText('')
            return setSearchArray('')
        }
        if (posts) {
            const searchQuery = event.target.value.toLowerCase()
            const filteredPosts = posts.posts.items.filter((elem) => {
                return elem.title.toLowerCase().includes(searchQuery);
            });
            setSearchArray(filteredPosts)
            console.log(searchArray);
        }
    };
    const searchValueNone = () => {
        setSearchText('')
        setSearchArray('')
    }



    return (
        <div className={classes.root} onClick={searchValueNone} >
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
                        {userData ? `${t('hello')}, ${userData?.fullName}!` : "Excio-FM"}
                    </Typography>
                    <div className={classes.searchDiv} >
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder={t('search')}
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                onChange={searchValueHandler}
                                inputProps={{ 'aria-label': 'search' }}
                                value={searchText}
                            />

                        </div>
                        <ul className={classes.searchList}>
                            {
                                searchArray !== '' ? (
                                    searchArray.map((obj, index) => {
                                        const title = obj.title;
                                        const searchQuery = searchText.toLowerCase();
                                        const parts = title.split(new RegExp(`(${searchQuery})`, 'gi'));

                                        return (
                                            <div>
                                                <span style={{ color: 'rgb(0, 0, 255)' }}>{index + 1}. </span>
                                                <Link onClick={searchValueNone} to={`/posts/${obj._id}`} style={{ textDecoration: 'none', color: 'rgb(0, 0, 0)' }}>
                                                    {parts.map((part, i) =>
                                                        part.toLowerCase() === searchQuery ? (
                                                            <mark key={i} style={{ backgroundColor: 'rgb(135, 206, 235)', fontWeight: 'bold' }}>
                                                                {part}
                                                            </mark>

                                                        ) : (
                                                            part
                                                        )
                                                    )}
                                                </Link>
                                                <Navigate to="/" />
                                            </div>
                                        );
                                    })
                                ) : ('')
                            }
                        </ul>
                    </div>
                    <LanguageSwitcher />
                </Toolbar>
            </AppBar>

            <DrawerMenu onSaveClickData={saveClickDataHandler} open={drawerState} toggleDrawer={closeDrawer} />
        </div>
    );
};


export default Header;
