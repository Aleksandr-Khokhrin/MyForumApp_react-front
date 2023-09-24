import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Grid from "@mui/material/Grid";
import { Paper } from "@mui/material";


import { fetchPosts, fetchTags } from '../redux/slices/posts';
import { Post } from '../Article/Post';
// import { CommentsBlock } from '../CommentsBlock';

const MainPage = (props) => {

    const dispatch = useDispatch();
    const userData = useSelector((state) => state.auth.data);
    const { posts, tags } = useSelector((state) => state.posts);
    // console.log(isAuth)
    const isArticlesLoading = posts.status === "loading";
    const isTagsLoading = tags.status === "loading";
    const [category, setCategory] = useState('all')
    const [activeCategory, setActiveCategory] = useState('Все');
    useEffect(() => {
        dispatch(fetchPosts());
        dispatch(fetchTags());
    }, []);
    useEffect(() => {
        setCategory(props.category)
    }, [props.category])
    useEffect(() => {
        // console.log(`${userData?.userData._id} userData?.userData._id`)
        // console.log(`${userData?._id} userData?._id`)
        // console.log(userData)
    }, [userData])


    const [value, setValue] = useState(2);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    let sortedPosts = [...posts.items];

    switch (activeCategory) {
        case 'new':
            sortedPosts = sortedPosts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            break;
        case 'popular':
            sortedPosts = sortedPosts.sort((a, b) => b.viewsCount - a.viewsCount);
            break;
        default:
            // По умолчанию сортируем по чему-то еще, например, по _id
            sortedPosts = sortedPosts.sort((a, b) => b.estimation - a.estimation);
            break;
    }

    return (
        <div>
            <Paper className="Paper" style={{ marginBottom: '1em', width: '36.5%' }}>
                <Tabs
                    className="Tabs"
                    indicatorColor="primary"
                    textColor="primary"
                    value={activeCategory}
                    onChange={handleChange}
                    aria-label="disabled tabs example"
                >
                    <Tab
                        style={{ width: '33%' }}
                        label="TOP"
                        value="TOP"
                        className={`tab ${activeCategory === 'TOP' ? 'active' : ''}`}
                        onClick={() => setActiveCategory('TOP')}
                    />
                    <Tab
                        style={{ width: '33%' }}
                        label="new"
                        value="new"
                        className={`tab ${activeCategory === 'new' ? 'active' : ''}`}
                        onClick={() => setActiveCategory('new')}
                    />
                    <Tab
                        style={{ width: '33%' }}
                        label="popular"
                        value="popular"
                        className={`tab ${activeCategory === 'popular' ? 'active' : ''}`}
                        onClick={() => setActiveCategory('popular')}
                    />
                </Tabs>
            </Paper>

            <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2em' , alignItems: 'space-between'}}>
                    {(isArticlesLoading ? [...Array(5)] : sortedPosts).map((obj, index) =>
                        isArticlesLoading ? (
                            <Post key={index} isLoading={true} />

                        ) : obj.tags[0] === category ? (
                            <div key={index} style={{ width: '35em', height: '25em', boxShadow: '0 2px 7px rgba(248, 248, 248, 0.25)' }}>
                                <Post
                                    size={true}
                                    id={obj._id}
                                    title={obj.title}
                                    imageUrl={
                                        obj.imageUrl ? `https://itransition-diplom-forum-node-600c7875a052.herokuapp.com/${obj.imageUrl}` : ""
                                    }
                                    user={obj.user}
                                    createdAt={obj.createdAt}
                                    viewsCount={obj.viewsCount}
                                    commentsCount={3}
                                    tags={obj.tags}
                                    estimation={obj.estimation}
                                    isEditable={userData?._id === obj.user._id}
                                />
                            </div>
                        ) : 'My reviews' === category && userData?._id === obj.user._id ? (
                            <div key={index}>
                                <Post
                                    size={true}
                                    id={obj._id}
                                    title={obj.title}
                                    imageUrl={
                                        obj.imageUrl ? `https://itransition-diplom-forum-node-600c7875a052.herokuapp.com/${obj.imageUrl}` : ""
                                    }
                                    user={obj.user}
                                    createdAt={obj.createdAt}
                                    viewsCount={obj.viewsCount}
                                    commentsCount={3}
                                    tags={obj.tags}
                                    estimation={obj.estimation}
                                    isEditable={userData?._id === obj.user._id}
                                />
                            </div>
                        ) : category === 'all' ? (
                            <div key={index}>
                                <Post
                                    size={true}
                                    id={obj._id}
                                    title={obj.title}
                                    imageUrl={
                                        obj.imageUrl ? `https://itransition-diplom-forum-node-600c7875a052.herokuapp.com/${obj.imageUrl}` : ""
                                    }
                                    user={obj.user}
                                    createdAt={obj.createdAt}
                                    viewsCount={obj.viewsCount}
                                    commentsCount={3}
                                    tags={obj.tags}
                                    estimation={obj.estimation}
                                    isEditable={userData?._id === obj.user._id}
                                />
                            </div>
                        ) : ''
                    )}
                </div>
                {/* <Grid xs={4} item>
                    <CommentsBlock
                        items={[
                            {
                                user: {
                                    fullName: "Василий Уткин",
                                    avatarUrl: "https://mui.com/static/images/avatar/1.jpg",
                                },
                                text: "Болеем за наших...я про футбол!",
                            },
                            {
                                user: {
                                    fullName: "Иван Иванов",
                                    avatarUrl: "https://mui.com/static/images/avatar/2.jpg",
                                },
                                text: "When displaying three lines or more, the avatar is not aligned at the top. You should set the prop to align the avatar at the top",
                            },
                        ]}
                        isLoading={false}
                    />
                </Grid> */}
            </div>
        </div>
    );
};

export default MainPage;