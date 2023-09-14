import React, { useState } from "react";
import { TextField, Button, Typography, Container } from "@material-ui/core";
import useStyles from './LoginStyle';


const SingIn = (props) => {
    const classes = useStyles()
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [userSurname, setUserSurname] = useState("");
    const [password, setPassword] = useState("");
    const [passwordTwo, setPasswordTwo] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handleSurNameChange = (e) => {
        setUserSurname(userSurname)
    };
    const handleNameChange = (e) => {
        setUserName(e.target.value);
    };

    const handlePasswordFirstChange = (e) => {
        setPassword(e.target.value);
    };
    const handlePasswordSecondChange = (e) => {
        setPasswordTwo(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== passwordTwo) {
            return alert('Passwords must be the same!')
            // Здесь вы можете выполнить проверку и отправку данных на сервер
        }
        const userData = {
            fullName: userName + ' ' + userSurname,
            email: email,
            passwordHash: password,
            avatarUrl: '',
        };
        console.log(userData)
        props.onOpenProfile(true)
        setUserName('')
        setUserSurname('')
        setEmail('')
        setPassword('')
    };

    const goToLoginBtn = () => {
        props.onloginState(true)
    }

    return (
        <Container className={classes.root} >
            <Typography variant="h4" className={classes.label}>
                Sing-in
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Name"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    value={userName}
                    onChange={handleNameChange}
                />
                <TextField
                    label="Surname"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    value={userSurname}
                    onChange={handleSurNameChange}
                />
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
                    onChange={handlePasswordFirstChange}
                />
                <TextField
                    label="Password"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    type="password"
                    value={passwordTwo}
                    onChange={handlePasswordSecondChange}
                />
                <div className={classes.buttonBox}>
                    <Button
                        type="button"
                        variant="outlined"
                        color="primary"
                        fullWidth
                        size="large"
                        onClick={goToLoginBtn}
                    >
                        Login
                    </Button><Button
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
