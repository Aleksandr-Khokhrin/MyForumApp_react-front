import React from "react";
import {Box, Typography, Button, TextField } from "@material-ui/core";
import useStyles from "./ProfileStyles";



const UserProfilePassword = ({ user, isPasswordEditing, handleEditPassword, handleSavePassword, handleCancelEdit, handlePasswordChange }) => {
    const classes = useStyles()
    return (

        <div>
            {isPasswordEditing ? (
                <Box className={classes.passwordBox}>
                    <div>
                    <TextField
                        label="Старый пароль"
                        type="text"
                        value={user.password}
                        onChange={handlePasswordChange}
                    />

                    </div>
                    <div>

                    <TextField
                        label="Новый пароль"
                        type="text"
                        value={user.password}
                        onChange={handlePasswordChange}
                    />
                    </div>
                </Box>
            ) : (
                <Typography></Typography>
            )}
            {isPasswordEditing ? (
                <div className={classes.changePassword}>
                    <Button variant="outlined" color="primary" onClick={handleSavePassword}>
                        Сохранить пароль
                    </Button>
                    <Button variant="outlined" color="secondary" onClick={handleCancelEdit}>
                        Отмена
                    </Button>
                </div>
            ) : (
                <Button variant="outlined" color="primary" onClick={handleEditPassword}>
                    Редактировать пароль
                </Button>
            )}
        </div>
    );
};

export default UserProfilePassword;
