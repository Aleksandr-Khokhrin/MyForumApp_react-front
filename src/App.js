import { useEffect } from "react";
import Container from "@mui/material/Container";
import { Routes, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

import Header from "./components/Header/Header";
import LoginBox from "./components/UI/UserLogin/LoginBox";
import SingIn from "./components/UI/UserLogin/SingIn";
import MainPage from "./components/MainPAge/MainPage";
import UserProfile from "./components/UI/UserProfile/Profile";
import CreateArticle from "./components/UI/UserProfile/CreateArticle";
import { FullPost } from "./components/Article/FullPost";

import Box from '@material-ui/core/Box';
import './components/MainPAge/MainPAge.css'

import { fetchAuthMe, selectIsAuth } from "./components/redux/slices/auth";

function App() {
  const dispatch = useDispatch()
  const isAuth = useSelector(selectIsAuth)
  const userData = useSelector((state) => state.auth.data);

useEffect(() => {
  // console.log(userData)
},[userData])

  useEffect(() => {
    dispatch(fetchAuthMe())
  }, [])


  return (
    <Box bgcolor="primary.main" style={{ minHeight: '100vh' }}>
      <Header />
      <div className="mainBody">
        <Container maxWidth="lg" style={{ paddingTop: '5em' }}>
          <Routes>
            <Route path='/' element={<MainPage category='all' />} />
            <Route path='/Books' element={<MainPage category='BOOK' />} />
            <Route path='/Films' element={<MainPage category='FILM' />} />
            <Route path='/Games' element={<MainPage category='GAME' />} />
            <Route path='/My reviews' element={<MainPage category='My reviews'/>} />
            <Route path='/posts/:id' element={<FullPost size={true} />}/>
            <Route path='/posts/:id/edit' element={<CreateArticle open={true}/>} />
            <Route path='/add-post' element={<CreateArticle open={true} />} />
            <Route path='/profile' element={<UserProfile />} />
            <Route path='/login' element={<LoginBox />} />
            <Route path='/register' element={<SingIn />} />
          </Routes>
        </Container>
      </div>
    </Box>
  );
}

export default App;
