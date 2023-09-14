import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '30rem',
        background: 'white',
        borderRadius: '0.5rem',
        boxShadow: '6px 12px 17px rgba(248, 248, 248, 0.25)'
    },
    label: {
        textAlign: 'center',
        marginTop: '1.5rem'
    },
    buttonBox: {
        display: 'flex',
        gap: '1rem',
        marginTop: '2rem',
        marginBottom: '2rem'
    },
    
}));

export default useStyles;