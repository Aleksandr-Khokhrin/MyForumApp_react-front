import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom'



import { TextField, Button, Typography, Container } from "@material-ui/core";
import useStyles from './LoginStyle';
import { fetchRegister, selectIsAuth } from "../../redux/slices/auth";



const SingIn = () => {
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
            return alert("Не удалось зарегистрироваться!");
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
                Sing-in
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    label="Full name"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    error={Boolean(errors.fullName?.message)}
                    helperText={errors.fullName?.message}
                    {...register("fullName", { required: "Укажите полное имя" })}
                />
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
                            Login
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
                        Sing-in
                    </Button>
                </div>

            </form>
        </Container>
    );
};

export default SingIn;
