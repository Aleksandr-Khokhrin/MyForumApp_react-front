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
    // console.log(posts)
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


    const [value, setValue] = useState(2);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
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
                        label="Все"
                        value="Все"
                        className={`tab ${activeCategory === 'Все' ? 'active' : ''}`}
                        onClick={() => setActiveCategory('Все')}
                    />
                    <Tab
                        style={{ width: '33%' }}
                        label="Новые"
                        value="Новые"
                        className={`tab ${activeCategory === 'Новые' ? 'active' : ''}`}
                        onClick={() => setActiveCategory('Новые')}
                    />
                    <Tab
                        style={{ width: '33%' }}
                        label="Популярные"
                        value="Популярные"
                        className={`tab ${activeCategory === 'Популярные' ? 'active' : ''}`}
                        onClick={() => setActiveCategory('Популярные')}
                    />
                </Tabs>
            </Paper>

            <div>
                <Grid xs={8} item>
                    {(isArticlesLoading ? [...Array(5)] : posts.items).map((obj, index) =>
                        isArticlesLoading ? (
                            <Post key={index} isLoading={true} />
                        ) : obj.tags[0] === category ? (
                            <div style={{width: '100%', height: '25em', paddingBottom: '2em'}}>
                                <Post
                                    key={obj._id}
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
                        ) : obj.user._id === category ? (
                            <div style={{width: '100%',  height: '25em', paddingBottom: '2em'}}>
                                <Post
                                    key={obj._id}
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
                            <div style={{width: '100%', height: '25em', paddingBottom: '2em'}}>
                                <Post
                                    key={obj._id}
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
                </Grid>
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