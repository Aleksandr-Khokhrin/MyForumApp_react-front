import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    formControl: {
        // margin: theme.spacing(1),
        minWidth: 60 ,
        maxHeight: 60,
        border: '1px solid rgb(255, 255, 255, 0.2) !important',
        borderRadius: '10px !important',
        marginLeft: '2em !important'
    },
    select: {
        color: 'rgb(255, 255, 255) !important', // Стили для элемента Select
        borderRadius: '10px !important',
        '&:hover': { // Добавляем стили для hover
            color: 'rgb(0, 0, 0) !important',
            backgroundColor: 'rgb(207, 207, 255) !important',
            transition: 'background-color 2.7s ease, color 2.7s ease !important', // Объединяем переходы в одном правиле
        },
    },
    option: {
        color: 'rgb(0, 0, 0) !important', // Стили для элемента Select
    },
}));


export default useStyles;
