import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, IconButton, TextField, Typography, Slider, Button } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import SaveIcon from '@material-ui/icons/Save';
import useStyles from "./ProfileStyles";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


const CreateArticleDialog = ({ isOpen, handleClose, handleArticleTitleChange, handleArticleContentChange, handleArticleImageChange, handleRatingChange, handleSaveArticle, newArticle }) => {
    const classes = useStyles()
    const [state, setState] = useState({
        checkedA: false,
        checkedB: false,
        checkedC: false,
    });
    const handleChange = (event) => {
        setState({
            checkedA: false,
            checkedB: false,
            checkedC: false,
            [event.target.name]: event.target.checked,
        });
    };
    return (
        <Dialog open={isOpen} onClose={handleClose}>
            <DialogTitle>Написать рецензию</DialogTitle>
            <DialogContent>
            <div>Категория:</div>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={state.checkedA}
                            onChange={handleChange}
                            name="checkedA"
                            color="primary"
                        />
                    }
                    label="BOOK"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={state.checkedB}
                            onChange={handleChange}
                            name="checkedB"
                            color="primary"
                        />
                    }
                    label="FILM"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={state.checkedC}
                            onChange={handleChange}
                            name="checkedC"
                            color="primary"
                        />
                    }
                    label="GAME"
                />
                <TextField
                    label="Заголовок"
                    fullWidth
                    value={newArticle.title}
                    onChange={handleArticleTitleChange}
                    />
                <TextField
                    label="Содержание"
                    fullWidth
                    multiline
                    rows={8}
                    value={newArticle.content}
                    onChange={handleArticleContentChange}
                />
                <h5 className={classes.h5}>Загрузить изображение</h5>
                <input
                    className={classes.loadImg}
                    type="file"
                    accept="image/*"
                    onChange={handleArticleImageChange}
                />
                <Typography id="rating-slider" gutterBottom>
                    Оценка:
                </Typography>
                <Slider
                    value={newArticle.rating}
                    onChange={handleRatingChange}
                    min={1}
                    max={10}
                    step={1}
                    valueLabelDisplay="auto"
                    aria-labelledby="rating-slider"
                />
            </DialogContent>
            <DialogActions>
                <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    className={classes.button}
                    startIcon={<SaveIcon />}
                    onClick={handleSaveArticle}
                >
                    Save
                </Button>
                <IconButton edge="end" color="inherit" onClick={handleClose} aria-label="close">
                    <CloseIcon />
                </IconButton>
            </DialogActions>
        </Dialog>
    );
};

export default CreateArticleDialog;
