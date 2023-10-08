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
        className={` ${classes.selectHover} ${classes.select}`} 
      >
        <option className={classes.option} value='en'>ENG</option>
        <option className={classes.option} value="ru">РУС</option>
        <option className={classes.option} value="uz">UZB</option>
      </Select>
    </FormControl>
  );
}

export default LanguageSwitcher;
