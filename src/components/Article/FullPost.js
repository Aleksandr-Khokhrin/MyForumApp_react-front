import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import myImg from '../../image/logo.jpg'

import axios from "../../axios";

import { Post } from "./Post";
// import { Index } from "../components/AddComment";
// import { CommentsBlock } from "../components/CommentsBlock";

export const FullPost = () => {
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/posts/${id}`)
      .then((res) => {
        // console.log(res.data);
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.warn(err);
        alert("Ошибка при получении статьи");
      });
  }, []);

  if (isLoading) {
    return <Post isLoading={isLoading} />;
  }

  return (
    <div>
      <Post 
        // width='100%'
        // height='100%'
        id={data._id}
        title={data.title}
        imageUrl={data.imageUrl ? `https://itransition-diplom-forum-node-600c7875a052.herokuapp.com/${data.imageUrl}` : myImg}
        user={data.user}
        createdAt={data.createdAt}
        viewsCount={data.viewsCount}
        commentsCount={3}
        tags={data.tags}
        estimation={data.estimation}
        likes={data.likes}
        isFullPost>
        <ReactMarkdown children={data.text} />
      </Post>
      {/* <CommentsBlock
        items={[
          {
            user: {
              fullName: "Вася Пупкин",
              avatarUrl: "https://mui.com/static/images/avatar/1.jpg",
            },
            text: "Это тестовый комментарий 555555",
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
      >
    <Index />
    </CommentsBlock> */}
    </div>
  );
};
