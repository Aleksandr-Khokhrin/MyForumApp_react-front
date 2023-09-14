import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        gap: '2em',
        maxWidth: '50rem',
        padding: '2em 5em',
        background: 'white',
        borderRadius: '0.5rem',
        boxShadow: '6px 12px 17px rgba(248, 248, 248, 0.25)'
    },
    box: {
        margin: '2em 0',
    },
    header: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '50rem',
        background: 'white',
    },
    changePassword: {
        marginBottom: '1em'
    },
    button: {
        margin: theme.spacing(1),
    },
    loadImg: {
        marginBottom: '2em',
    },
    h5: {
        margin: '0',
        marginTop: '2em',
    },
    marginLikedArticles: {
        margin: '0',
        marginBottom: '1em'
    }

}));

export default useStyles;