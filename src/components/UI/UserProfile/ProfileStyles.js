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
        boxShadow: '0 2px 7px rgba(248, 248, 248, 0.25)'
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
    loadingIMG: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1em',
        marginBottom: '1em',
        fontSize: '1em',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    marginLikedArticles: {
        margin: '0',
        marginBottom: '1em'
    },
    passwordBox: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '1em'
    },
    placeholder: {
        color: 'black'
      },

}));

export default useStyles;