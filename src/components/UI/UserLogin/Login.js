import React, { useState } from "react";
import { TextField, Button, Typography, Container } from "@material-ui/core";
import useStyles from './LoginStyle';


const Login = (props) => {
    const classes = useStyles()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);

    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // Здесь вы можете выполнить проверку и отправку данных на сервер
        const userData = {
            email: email,
            password: password,
        };
        console.log(userData)
        props.onOpenProfile(true)
        setEmail('')
        setPassword('')
    };

    const goToSinginPage = () => {
        props.onloginState(false)
    }

    return (
        <Container className={classes.root}>
            <Typography variant="h4" className={classes.label}>
                Login
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Email"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    value={email}
                    onChange={handleEmailChange}
                />
                <TextField
                    label="Password"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                />
                <div className={classes.buttonBox}>
                    <Button
                        type="submit"
                        variant="outlined"
                        color="secondary"
                        fullWidth
                        size="large"
                    >
                        Login
                    </Button><Button
                        type="button"
                        variant="outlined"
                        color="primary"
                        fullWidth
                        size="large"
                        onClick={goToSinginPage}
                    >
                        Sing-in
                    </Button>
                </div>

            </form>
        </Container>
    );
};

export default Login;