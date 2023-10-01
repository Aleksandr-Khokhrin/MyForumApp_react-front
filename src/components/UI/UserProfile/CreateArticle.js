import { useState, useCallback, useMemo, useRef, useEffect } from "react";
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";
import { useNavigate, Navigate, useParams } from "react-router-dom";

// import Paper from "@mui/material/Paper";
// import SimpleMDE from "react-simplemde-editor";

import "easymde/dist/easymde.min.css";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    IconButton,
    TextField,
    Typography,
    Slider,
    Button
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import SaveIcon from '@material-ui/icons/Save';
import useStyles from "./ProfileStyles";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { selectIsAuth } from "../../redux/slices/auth";
import axios from "../../../axios";







const CreateArticle = (props) => {
    const classes = useStyles()
    const [dialog, setDialog] = useState(false)
    useEffect(() => {
        setDialog(props.open)
    }, [])

    const [state, setState] = useState({
        BOOK: false,
        FILM: false,
        GAME: false,
    });
    useEffect(() => {
        console.log(tags)
    }, [state])

    const handleChange = (event) => {
        setState({
            BOOK: false,
            FILM: false,
            GAME: false,
            [event.target.name]: event.target.checked,
        });
        setTags(event.target.name)
    };


    const { id } = useParams();
    const navigate = useNavigate();
    const isAuth = useSelector(selectIsAuth);
    const [text, setText] = useState("");
    const [isLoading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState("");
    const [title, setTitle] = useState("");
    const [tags, setTags] = useState("");
    const [estimation, setEstimation] = useState(0);
    const inputFileRef = useRef(null);

    useEffect(() => {
        // console.log(estimation)
    }, [estimation])
    // console.log(id)


    const isEditing = Boolean(id)
    useEffect(() => {
    },[isEditing])
    const handleChangeFile = async (event) => {
        try {
            const formData = new FormData();
            const file = event.target.files[0];
            formData.append("image", file);
            const { data } = await axios.post("/upload", formData);
            console.log(data);
            setImageUrl(data.url);
        } catch (error) {
            console.warn(error);
            alert("Ошибка при загрузке файла!");
        }
    };


    const handleRatingChange = (event, newValue) => {
        setEstimation(newValue);
    };
    const onClickRemoveImage = () => {
        setImageUrl("");
    };


    const onSubmit = async () => {
        try {
            setLoading(true);
            const fields = {
                title,
                imageUrl,
                tags,
                text,
                estimation,
            };

            const { data } = isEditing
                ? await axios.patch(`/posts/${id}`, fields)
                : await axios.post("/posts", fields);

            const _id = isEditing ? id : data._id;

            navigate(`/`);
        } catch (error) {
            console.warn(error);
            alert("Ошибка при создании статьи!");
        }
    };

    useEffect(() => {
        if (id) {
            axios
                .get(`/posts/${id}`)
                .then(({ data }) => {
                    setTitle(data.title);
                    setText(data.text);
                    setImageUrl(data.imageUrl);
                    setTags(data.tags[0]);
                    setEstimation(data.estimation)
                })
                .catch((err) => {
                    console.warn(err);
                    alert("Ошибка при получении статьи!");
                });
        }
    }, []);

    const options = useMemo(
        () => ({
            spellChecker: false,
            maxHeight: "400px",
            autofocus: true,
            placeholder: "Введите текст...",
            status: false,
            autosave: {
                enabled: true,
                delay: 1000,
            },
        }),
        []
    );

    useEffect(() => {
        // Здесь устанавливаем состояние чекбоксов исходя из значения, полученного с сервера (например, 'BOOK')
        if (tags === 'BOOK') {
          setState({ ...state, BOOK: true });
        } else if (tags === 'FILM') {
          setState({ ...state, FILM: true });
        } else if (tags === 'GAME') {
          setState({ ...state, GAME: true });
        }
      }, [tags]);

    if (!window.localStorage.getItem("token") && !isAuth) {
        return <Navigate to="/" />;
    }

    return (
        <Dialog open={dialog} >
            <DialogTitle>Write a review</DialogTitle>

            <DialogContent >
                <div className={classes.loadingIMG}>
                    <div>
                        <Button
                            onClick={() => inputFileRef.current.click()}
                            variant="outlined"
                            size="large"
                        >
                            Download IMG
                        </Button>
                        <input
                            ref={inputFileRef}
                            type="file"
                            onChange={handleChangeFile}
                            hidden
                        />
                    </div>
                    <div className={classes.loadingIMG}>
                        {imageUrl && (
                            <>
                                <Button
                                    variant="contained"
                                    color="error"
                                    onClick={onClickRemoveImage}
                                >
                                    delete
                                </Button>
                                <img
                                    style={{ width: '20em' }}
                                    src={`http://localhost:4444/${imageUrl}`}
                                    alt="Uploaded"
                                />
                            </>
                        )}

                    </div>

                </div>
                <div>Category:</div>

                <FormControlLabel
                    control={
                        <Checkbox
                            checked={state.BOOK}
                            onChange={handleChange}
                            name="BOOK"
                            color="primary"
                        />
                    }
                    label="BOOK"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={state.FILM}
                            onChange={handleChange}
                            name="FILM"
                            color="primary"
                        />
                    }
                    label="FILM"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={state.GAME}
                            onChange={handleChange}
                            name="GAME"
                            color="primary"
                        />
                    }
                    label="GAME"
                />
                <TextField
                    label="Heading"
                    placeholder="..."
                    fullWidth
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <TextField
                    label="Content"
                    fullWidth
                    multiline
                    value={text}
                    placeholder="..."
                    onChange={(e) => setText(e.target.value)}
                    rows={16}
                />
                <Typography id="rating-slider" gutterBottom>
                    Estimator:
                </Typography>
                <Slider
                    onChange={handleRatingChange}
                    min={1}
                    max={10}
                    step={1}
                    value={estimation}
                    valueLabelDisplay="auto"
                    aria-labelledby="rating-slider"
                />
            </DialogContent>
            <DialogActions>
                <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    onClick={onSubmit}
                    className={classes.button}
                    startIcon={<SaveIcon />}
                >
                    {isEditing ? "Save" : "Publish"}
                </Button>
                <Link to='/profile'>
                    <IconButton edge="end" onClick={() => setDialog(false)} color="inherit" aria-label="close">
                        <CloseIcon />
                    </IconButton>
                </Link>

            </DialogActions>
        </Dialog>
    );
};

export default CreateArticle;
