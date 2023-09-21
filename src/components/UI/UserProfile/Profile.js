import React, { useState, useEffect } from "react";
import { useNavigate, Navigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Link } from 'react-router-dom'
import { selectIsAuth, logout } from "../../redux/slices/auth";
import axios from "../../../axios";


import {
    Container,
    Grid,
    Paper,
    Button,
    Typography,
} from "@material-ui/core";
import UserProfileHeader from "./UserProfileHeader";
import useStyles from "./ProfileStyles";
import '../../MainPAge/MainPAge.css'


const UserProfile = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector(selectIsAuth);
    const userData = useSelector((state) => state.auth.data);
    const classes = useStyles()



    const [user, setUser] = useState({
        avatarUrl: '',
        fullName: '',
        email: '',
    });

    const [isEditing, setIsEditing] = useState(false);
    const handlePhotoChange = (event) => {
        setUser({ ...user, avatarUrl: event.target.value });
    };

    const handleNameChange = (event) => {
        setUser({ ...user, fullName: event.target.value });
    };

    const handleEmailChange = (event) => {
        setUser({ ...user, email: event.target.value });
    };
    const handleSaveProfile = async () => {
        try {
            const response = await axios.put('/upload', {
                avatarUrl: user.avatarUrl,
                fullName: user.fullName,
                email: user.email,
            });
            console.log(response)
        } catch (error) {
            console.error('Ошибка при обновлении профиля:', error);
            // Обработайте ошибку здесь
        }
        setIsEditing(false);
    };


    const handleEditProfile = () => {
        setIsEditing(true);
    };


    if (!window.localStorage.getItem("token") && !isAuth) {
        return <Navigate to="/" />;
    }
    const onClickLogout = () => {
        if (window.confirm('Вы действительно хотите выйти?')) {
            dispatch(logout())
            window.localStorage.removeItem('token')
        }
    };

    return (
        <div className="mainBody">
            <div className={classes.root}>
                <UserProfileHeader
                    user={user}
                    isEditing={isEditing}
                    handleEditProfile={handleEditProfile}
                    handleSaveProfile={handleSaveProfile}
                    handlePhotoChange={handlePhotoChange}
                    handleNameChange={handleNameChange}
                    handleEmailChange={handleEmailChange}
                />
                <Link to='/add-post' className={classes.link}>
                    <Button variant="outlined" color="primary" >
                        Создать статью
                    </Button>
                </Link>

                <div>Дата регистрации профиля: {userData?.userData.createdAt.slice(0, 10).split('-').reverse().join('.')}</div>
                <Button onClick={onClickLogout} variant="outlined" color="secondary">
                    Выйти из профиля
                </Button>
            </div>
        </div>
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