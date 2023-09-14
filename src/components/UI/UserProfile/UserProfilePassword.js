import React from "react";
import { Typography, Button, TextField } from "@material-ui/core";
import useStyles from "./ProfileStyles";



const UserProfilePassword = ({ user, isPasswordEditing, handleEditPassword, handleSavePassword, handleCancelEdit, handlePasswordChange }) => {
    const classes = useStyles()
    return (

        <div>
            {isPasswordEditing ? (
                <TextField
                    label="Пароль"
                    fullWidth
                    type="password"
                    value={user.password}
                    onChange={handlePasswordChange}
                />
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
