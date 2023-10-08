import { alpha, makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        position: 'fixed',
        width: '100%',
        zIndex: '999',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        display: 'flex',
        gap: '10rem',
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '30ch',
            '&:focus': {
                width: '30ch',
            },
        },
    },
    searchDiv: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        right: '10%',
        top: '20%',
    },
    searchList: {
        backgroundColor: 'rgb(255, 255, 255)',
        borderRadius: '10px',
        padding: '1em 0.5em 0.5em 0.5em',
        width: '35ch',
        marginLeft: '1em',
        marginTop: '0.5em',
        boxShadow: '0 2px 7px rgba(224, 255, 255, 1)',
        border: '1px rgb(255, 255, 255) solid'
    },
    post: {
        textDecoration: 'none',
        color: 'rgb(0, 0, 0) !important',
        letterSpacing: 2,
        fontSize: '1.1em',
        '&:hover': { // Добавляем стили для hover
            color: 'rgb(255, 255, 255) !important', // Стили для элемента Select
            backgroundColor: 'rgb(0, 0, 255) !important',
            transition: 'background-color 2.7s ease, color 0.7s ease !important', // Объединяем переходы в одном правиле
        },
    }
}));

export default useStyles;