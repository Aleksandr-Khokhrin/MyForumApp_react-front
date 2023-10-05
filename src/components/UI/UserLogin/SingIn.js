import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";



import { TextField, Button, Typography, Container } from "@material-ui/core";
import useStyles from './LoginStyle';
import { fetchRegister, selectIsAuth } from "../../redux/slices/auth";



const SingIn = () => {
    const { t } = useTranslation()
    const classes = useStyles()
    const isAuth = useSelector(selectIsAuth);
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({
        defaultValues: {
            fullName: "",
            email: "",
            password: "",
        },
        mode: "onChange",
    });

    const onSubmit = async (values) => {
        const data = await dispatch(fetchRegister(values));
        if (!data.payload) {
            return alert(`${t('failedSing')}`);
        }
        if ("token" in data.payload) {
            window.localStorage.setItem("token", data.payload.token);
        }
    };

    if (isAuth) {
        return <Navigate to="/" />;
    }


    return (
        <Container className={classes.root} >
            <Typography variant="h4" className={classes.label}>
                {t('singIn')}
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    label={t('fullname')}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    error={Boolean(errors.fullName?.message)}
                    helperText={errors.fullName?.message}
                    {...register("fullName", { required: "Укажите полное имя" })}
                />
                <TextField
                    label={t('email')}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    error={Boolean(errors.email?.message)}
                    helperText={errors.email?.message}
                    {...register("email", { required: "Укажите почту" })}
                />
                <TextField
                    label={t('password')}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    type="password"
                    error={Boolean(errors.password?.message)}
                    helperText={errors.password?.message}
                    {...register("password", { required: "Укажите пароль" })}
                />
                <div className={classes.buttonBox}>

                    <Link to="/Login">
                        <Button
                            type="button"
                            variant="outlined"
                            color="primary"
                            fullWidth
                            size="large"
                        >
                            {t('login')}
                        </Button>
                    </Link>
                    <Button
                        disabled={!isValid}
                        type="submit"
                        variant="outlined"
                        color="secondary"
                        fullWidth
                        size="large"
                    >
                        {t('singIn')}
                    </Button>
                </div>

            </form>
        </Container>
    );
};

export default SingIn;
