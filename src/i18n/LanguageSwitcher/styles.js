import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 60,
        border: '1px solid rgb(255, 255, 255)',
        borderRadius: '10px',
    },
    select: {
        color: 'rgb(255, 255, 255)', // Стили для элемента Select
        borderRadius: '10px'
    },
    selectHover: {
        '&:hover': {
            color: 'rgb(0, 0, 0)',
            backgroundColor: 'rgb(207, 207, 255, 0.9)',
            transition: 'background-color 2.7s ease',
            transition: 'color 2.7s ease',
        },
    },
    option: {
        color: 'rgb(0, 0, 0)', // Стили для элемента Select
        border: '10px'
    },
}));


export default useStyles;
