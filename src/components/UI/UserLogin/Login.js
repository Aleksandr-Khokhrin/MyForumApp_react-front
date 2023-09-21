import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom'

import { TextField, Button, Typography, Container } from "@material-ui/core";
import useStyles from './LoginStyle';
import { fetchAuth, selectIsAuth } from "../../redux/slices/auth";

const Login = () => {
    const classes = useStyles()
    const isAuth = useSelector(selectIsAuth);
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isValid },
    } = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
        mode: "onChange",
    });

    const onSubmit = async (values) => {
        const data = await dispatch(fetchAuth(values));
        if (!data.payload) {
            return alert("Не удалось авторизоваться!");
        }
        if ("token" in data.payload) {
            window.localStorage.setItem("token", data.payload.token);
        }
    };

    if (isAuth) {
        return <Navigate to="/" />;
    }

    return (
        <Container className={classes.root}>
            <Typography variant="h4" className={classes.label}>
                Login
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    label="Email"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    error={Boolean(errors.email?.message)}
                    helperText={errors.email?.message}
                    {...register("email", { required: "Укажите почту" })}
                />
                <TextField
                    label="Password"
                    type="password"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    error={Boolean(errors.password?.message)}
                    helperText={errors.password?.message}
                    {...register("password", { required: "Укажите пароль" })}
                // onChange={handlePasswordChange}
                />
                <div className={classes.buttonBox}>
                    <Button
                        disabled={!isValid}
                        type="submit"
                        variant="outlined"
                        color="secondary"
                        fullWidth
                        size="large"
                    >
                        Login
                    </Button>
                    <Link to="/register">
                        <Button
                            type="button"
                            variant="outlined"
                            color="primary"
                            fullWidth
                            size="large"
                        >
                            SingIn
                        </Button>
                    </Link>

                </div>

            </form>
        </Container>
    );
};

export default Login;