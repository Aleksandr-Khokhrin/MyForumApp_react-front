import React, { useState, useEffect } from "react";
import {
    Container,
    Grid,
    Paper,
    Button,
    Typography,
} from "@material-ui/core";

import UserProfileHeader from "./UserProfileHeader";
import LikedArticles from "./LikedArticles";
import CreateArticleDialog from "./CreateArticleDialog";
import useStyles from "./ProfileStyles";

const UserProfile = () => {
    const [user, setUser] = useState({
        photoURL: "",
        name: "",
        email: "",
        password: "",
        likedArticles: [],
    });
    const classes = useStyles()

    const [isEditing, setIsEditing] = useState(false);
    const [isPasswordEditing, setIsPasswordEditing] = useState(false);

    const [createArticleOpen, setCreateArticleOpen] = useState(false);
    const [newArticle, setNewArticle] = useState({
        title: "",
        content: "",
        image: null,
        rating: 5,
    });

    const handlePhotoChange = (event) => {
        setUser({ ...user, photoURL: event.target.value });
    };

    const handleNameChange = (event) => {
        setUser({ ...user, name: event.target.value });
    };

    const handleEmailChange = (event) => {
        setUser({ ...user, email: event.target.value });
    };

    const handlePasswordChange = (event) => {
        setUser({ ...user, password: event.target.value });
    };

    const handleEditProfile = () => {
        setIsEditing(true);
    };

    const handleSaveProfile = () => {
        setIsEditing(false);
    };

    const handleEditPassword = () => {
        setIsPasswordEditing(true);
    };

    const handleSavePassword = () => {
        setIsPasswordEditing(false);
    };

    const handleCancelEdit = () => {
        setIsEditing(false);
        setIsPasswordEditing(false);
    };

    const handleCreateArticle = () => {
        setCreateArticleOpen(true);
    };

    const handleCloseCreateArticle = () => {
        setCreateArticleOpen(false);
    };

    const handleArticleTitleChange = (event) => {
        setNewArticle({ ...newArticle, title: event.target.value });
    };

    const handleArticleContentChange = (event) => {
        setNewArticle({ ...newArticle, content: event.target.value });
    };

    const handleArticleImageChange = (event) => {
        const file = event.target.files[0];
        setNewArticle({ ...newArticle, image: file });
    };

    const handleRatingChange = (event, newValue) => {
        setNewArticle({ ...newArticle, rating: newValue });
    };

    const handleSaveArticle = () => {
        setCreateArticleOpen(false);
        setNewArticle({ title: "", content: "", image: null, rating: 5 });
    };

    const handleLogout = () => {
        // Реализуйте выход из профиля
    };


    return (
        <Container className={classes.root}>
            <Container></Container>
            <UserProfileHeader
                user={user}
                isEditing={isEditing}
                handleEditProfile={handleEditProfile}
                handleSaveProfile={handleSaveProfile}
                handleCancelEdit={handleCancelEdit}
                handlePhotoChange={handlePhotoChange}
                handleNameChange={handleNameChange}
                handleEmailChange={handleEmailChange}
                isPasswordEditing={isPasswordEditing}
                handleEditPassword={handleEditPassword}
                handleSavePassword={handleSavePassword}
                handlePasswordChange={handlePasswordChange}
            />
            <LikedArticles
                user={user}
                handleCreateArticle={handleCreateArticle}
                />
            <CreateArticleDialog
                isOpen={createArticleOpen}
                handleClose={handleCloseCreateArticle}
                handleArticleTitleChange={handleArticleTitleChange}
                handleArticleContentChange={handleArticleContentChange}
                handleArticleImageChange={handleArticleImageChange}
                handleRatingChange={handleRatingChange}
                handleSaveArticle={handleSaveArticle}
                newArticle={newArticle}
            />
            <Button variant="outlined" color="secondary" onClick={handleLogout}>
                Выйти из профиля
            </Button>
        </Container>
    );
};

export default UserProfile;

































// import React, { useState, useEffect } from "react";
// import {
//   Avatar,
//   Button,
//   Container,
//   Grid,
//   Paper,
//   TextField,
//   Typography,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   IconButton,
//   Slider, // Импорт компонента Slider
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   Box,
// } from "@material-ui/core";
// import CloseIcon from "@material-ui/icons/Close";

// const UserProfile = () => {
//     const [user, setUser] = useState({
//         photoURL: "",
//         name: "",
//         email: "",
//         password: "",
//         likedArticles: [],
//     });

//     const [isEditing, setIsEditing] = useState(false);
//     const [isPasswordEditing, setIsPasswordEditing] = useState(false);

//     const [createArticleOpen, setCreateArticleOpen] = useState(false);
//     const [newArticle, setNewArticle] = useState({
//         title: "",
//         content: "",
//         image: null,
//         rating: 5,
//     });

//     const handlePhotoChange = (event) => {
//         setUser({ ...user, photoURL: event.target.value });
//     };

//     const handleNameChange = (event) => {
//         setUser({ ...user, name: event.target.value });
//     };

//     const handleEmailChange = (event) => {
//         setUser({ ...user, email: event.target.value });
//     };

//     const handlePasswordChange = (event) => {
//         setUser({ ...user, password: event.target.value });
//     };

//     const handleEditProfile = () => {
//         setIsEditing(true);
//     };

//     const handleSaveProfile = () => {
//         setIsEditing(false);
//     };

//     const handleEditPassword = () => {
//         setIsPasswordEditing(true);
//     };

//     const handleSavePassword = () => {
//         setIsPasswordEditing(false);
//     };

//     const handleCancelEdit = () => {
//         setIsEditing(false);
//         setIsPasswordEditing(false);
//     };

//     const handleCreateArticle = () => {
//         setCreateArticleOpen(true);
//     };

//     const handleCloseCreateArticle = () => {
//         setCreateArticleOpen(false);
//     };

//     const handleArticleTitleChange = (event) => {
//         setNewArticle({ ...newArticle, title: event.target.value });
//     };

//     const handleArticleContentChange = (event) => {
//         setNewArticle({ ...newArticle, content: event.target.value });
//     };

//     const handleArticleImageChange = (event) => {
//         const file = event.target.files[0];
//         setNewArticle({ ...newArticle, image: file });
//     };

//     const handleRatingChange = (event, newValue) => {
//         setNewArticle({ ...newArticle, rating: newValue });
//     };

//     const handleSaveArticle = () => {
//         setCreateArticleOpen(false);
//         setNewArticle({ title: "", content: "", image: null, rating: 5 });
//     };

//     const handleLogout = () => {
//         // Реализуйте выход из профиля
//     };


//     return (
//         <Container style={{ backgroundColor: 'white'}}>
//             <Grid container spacing={3}>
//                 <Grid item xs={12}>
//                     <Typography variant="h4">Личная страница</Typography>
//                 </Grid>
//                 <Grid item xs={12} md={4}>
//                     <Paper>
//                         <Avatar alt="User Photo" src={user.photoURL} />
//                         {isEditing ? (
//                             <TextField
//                                 label="Фото пользователя (URL)"
//                                 fullWidth
//                                 value={user.photoURL}
//                                 onChange={handlePhotoChange}
//                             />
//                         ) : (
//                             <Typography>{user.photoURL}</Typography>
//                         )}
//                     </Paper>
//                 </Grid>
//                 <Grid item xs={12} md={8}>
//                     <Paper>
//                         <TextField
//                             label="Имя пользователя"
//                             fullWidth
//                             value={user.name}
//                             onChange={handleNameChange}
//                             disabled={!isEditing}
//                         />
//                         <TextField
//                             label="Email пользователя"
//                             fullWidth
//                             value={user.email}
//                             onChange={handleEmailChange}
//                             disabled={!isEditing}
//                         />
//                         {isPasswordEditing ? (
//                             <TextField
//                                 label="Пароль"
//                                 fullWidth
//                                 type="password"
//                                 value={user.password}
//                                 onChange={handlePasswordChange}
//                             />
//                         ) : (
//                             <Typography>Пароль скрыт</Typography>
//                         )}
//                         {isEditing ? (
//                             <>
//                                 <Button variant="outlined" color="primary" onClick={handleSaveProfile}>
//                                     Сохранить
//                                 </Button>
//                                 <Button variant="outlined" color="secondary" onClick={handleCancelEdit}>
//                                     Отмена
//                                 </Button>
//                             </>
//                         ) : (
//                             <Button variant="outlined" color="primary" onClick={handleEditProfile}>
//                                 Редактировать профиль
//                             </Button>
//                         )}
//                         {isPasswordEditing ? (
//                             <>
//                                 <Button variant="outlined" color="primary" onClick={handleSavePassword}>
//                                     Сохранить пароль
//                                 </Button>
//                                 <Button variant="outlined" color="secondary" onClick={handleCancelEdit}>
//                                     Отмена
//                                 </Button>
//                             </>
//                         ) : (
//                             <Button variant="outlined" color="primary" onClick={handleEditPassword}>
//                                 Редактировать пароль
//                             </Button>
//                         )}
//                     </Paper>
//                 </Grid>
//                 <Grid item xs={12}>
//                     <Typography variant="h5">Статьи, которые понравились:</Typography>
//           <ul>
//             {user.likedArticles.map((article) => (
//               <li key={article.id}>{article.title}</li>
//             ))}
//           </ul>
//           <Button variant="outlined" color="primary" onClick={handleCreateArticle}>
//             Создать статью
//           </Button>
//           <Button variant="outlined" color="secondary" onClick={handleLogout}>
//             Выйти из профиля
//           </Button>
//         </Grid>
//       </Grid>
//       <Dialog open={createArticleOpen} onClose={handleCloseCreateArticle}>
//         <DialogTitle>Создать статью</DialogTitle>
//         <DialogContent>
//           <TextField
//             label="Заголовок"
//             fullWidth
//             value={newArticle.title}
//             onChange={handleArticleTitleChange}
//           />
//           <TextField
//             label="Содержание"
//             fullWidth
//             multiline
//             rows={4}
//             value={newArticle.content}
//             onChange={handleArticleContentChange}
//           />
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleArticleImageChange}
//           /> {/* Поле для загрузки изображения */}
//           <Typography id="rating-slider" gutterBottom>
//             Оценка:
//           </Typography>
//           <Slider
//             value={newArticle.rating}
//             onChange={handleRatingChange}
//             min={1}
//             max={10}
//             step={1}
//             valueLabelDisplay="auto"
//             aria-labelledby="rating-slider"
//           /> {/* Шкала оценки */}
//         </DialogContent>
//         <DialogActions>
//           <Button variant="outlined" color="primary" onClick={handleSaveArticle}>
//             Сохранить статью
//           </Button>
//           <IconButton edge="end" color="inherit" onClick={handleCloseCreateArticle} aria-label="close">
//             <CloseIcon />
//           </IconButton>
//         </DialogActions>
//       </Dialog>
//     </Container>
//   );
// };
// export default UserProfile;