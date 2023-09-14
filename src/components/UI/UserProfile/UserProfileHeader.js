import React from "react";
import { Avatar, TextField, Button, Typography, Grid } from "@material-ui/core";
import UserProfilePassword from "./UserProfilePassword";


const UserProfileHeader = ({
    user,
    isEditing,
    handleEditProfile,
    handleSaveProfile,
    handleCancelEdit,
    handlePhotoChange,
    handleNameChange,
    handleEmailChange,
    isPasswordEditing,
    handleEditPassword,
    handleSavePassword,
    handlePasswordChange
}) => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={12}>
                <Typography variant="h4">Мой профиль</Typography>
            </Grid>
            <Grid item xs={12} md={10}>
                <div>
                    <Avatar alt="User Photo" style={{ padding: '2em 0', height: '4em', width: '10em' }} src={user.photoURL} />
                    {isEditing ? (
                        <TextField
                            label="Фото пользователя (URL)"
                            fullWidth
                            value={user.photoURL}
                            onChange={handlePhotoChange}
                        />
                    ) : (
                        <Typography>{user.photoURL}</Typography>
                    )}
                </div>
            </Grid>
            <Grid item xs={12} md={8}>
                <div>
                    <TextField
                        label="Имя"
                        fullWidth
                        value={user.name}
                        onChange={handleNameChange}
                        disabled={!isEditing}
                    />
                    <TextField
                        label="Email"
                        fullWidth
                        value={user.email}
                        onChange={handleEmailChange}
                        disabled={!isEditing}
                    />
                </div>
            </Grid>
            <Grid item xs={12}>
                {isEditing ? (
                    <div >
                        <UserProfilePassword
                            user={user}
                            isPasswordEditing={isPasswordEditing}
                            handleEditPassword={handleEditPassword}
                            handleSavePassword={handleSavePassword}
                            handleCancelEdit={handleCancelEdit}
                            handlePasswordChange={handlePasswordChange}
                        />
                        <Button variant="outlined" color="primary" onClick={handleSaveProfile}>
                            Сохранить
                        </Button>
                        <Button variant="outlined" color="secondary" onClick={handleCancelEdit}>
                            Отмена
                        </Button>
                    </div>
                ) : (
                    <Button variant="outlined" color="primary" onClick={handleEditProfile}>
                        Редактировать профиль
                    </Button>
                )}
            </Grid>
        </Grid>
    );
};

export default UserProfileHeader;
