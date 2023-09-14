import React, { useState, useEffect } from "react";
import Article from "./Article";
import './MainPAge.css';
import OpenProfile from "../UI/UserProfile/OpenProfile";
import LoginBox from "../UI/UserLogin/LoginBox";


const MainPage = (props) => {
    const [categoryArticle, setCategoryArticle] = useState('');
    const [openProfile, setOpenProfile] = useState(false)
    let correctList;

    useEffect(() => {
        // console.log(props.categoryState)
        setCategoryArticle(props.categoryState);
    }, [props.categoryState]);


    if (categoryArticle === 'Games') {
        correctList = props.articles.filter(article => article.category === 'GAME');
    } else if (categoryArticle === 'Films') {
        correctList = props.articles.filter(article => article.category === 'FILM');
    } else if (categoryArticle === 'Books') {
        correctList = props.articles.filter(article => article.category === 'BOOK');
    } else {
            correctList = props.articles
    } 

    const articles = correctList.map((elem, i) => {
        // let zIndex = 9999 - i;
        let useKey = Math.random().toString()
        let id = useKey.replace('.', '').replace('/', '');
        return <Article
            key={id}
            author={elem.author}
            title={elem.title}
            text={elem.text}
            avatarText={elem.avatarText}
            image={elem.image}
            date={elem.date}
            like={Math.round((i * Math.random()) * 10)}
        // zIndex={zIndex}
        />
    })
    const openProfileHandler = () => {
        setOpenProfile(true)
        setCategoryArticle('Main Page')
        props.onOpenPageCall('My profile')
        console.log('Привет из MainPage')
    }

    return (

        <div >
            {categoryArticle === 'Login' ?
            <div className="mainBody jcCenter"><LoginBox onOpenProfile={openProfileHandler}/></div> :
            categoryArticle === 'My profile' ?
            <div className="mainBody"><OpenProfile/></div> :
            <div className="mainBody">{articles}</div>}
        </div>
    )
};

export default MainPage;