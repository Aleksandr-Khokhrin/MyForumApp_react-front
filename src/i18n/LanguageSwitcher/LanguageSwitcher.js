// Пример компонента с переключателем языка
import i18n from '../i18n';
import useStyles from './styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

function LanguageSwitcher() {
  const classes = useStyles();


  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <Select
        native
        onChange={changeLanguage}
        className={` ${classes.selectHover} ${classes.select}`} // Используйте className для Select
      >
        <option className={classes.option} value='en'>ENG</option>
        <option className={classes.option} value="ru">РУС</option>
        {/* <option style={{color: 'white', backgroundColor: 'rgb(20, 0, 117, 0.9)'}} value='en'>EN</option>
        <option style={{color: 'white', backgroundColor: 'rgb(20, 0, 117, 0.9)'}} value="es">ES</option> */}
      </Select>
    </FormControl>
  );
}

export default LanguageSwitcher;
