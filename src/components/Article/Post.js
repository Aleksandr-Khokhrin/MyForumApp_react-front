import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { fetchRemovePost } from '../redux/slices/posts';
import { useDispatch, useSelector } from "react-redux";
import axios from '../../axios';

import clsx from 'clsx';
import RateReviewIcon from '@material-ui/icons/RateReview';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import EyeIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { Button } from '@mui/material';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

import styles from './Post.module.scss';
import { UserInfo } from '../UserInfo';
import { PostSkeleton } from './Skeleton';

export const Post = ({
  size,
  id,
  title,
  createdAt,
  imageUrl,
  user,
  viewsCount,
  commentsCount,
  tags,
  children,
  isFullPost,
  isLoading,
  isEditable,
  estimation,
  likes
}) => {
  const userData = useSelector((state) => state.auth.data);
  const [postSize, setPostSize] = useState(size)
  const [like, setLike] = useState(likes?.includes(userData?._id))
  const [likeArray, setLikeArray] = useState()
  const dispatch = useDispatch()


  useEffect(() => {
    setPostSize(size);
    setLikeArray(likes);
  }, [size, likes, like]);

  const onChangeLike = async () => {
    try {
      let updatedLikes = [...likeArray];

      if (!like) {
        updatedLikes.push(userData._id);
        setLike(true)
      } else {
        updatedLikes = updatedLikes.filter(item => item !== userData._id);
        setLike(false)
      }

      const response = await axios.patch(`/posts/like/${id}`, {
        likes: updatedLikes,
      });
      setLikeArray(prevLikes => updatedLikes);

    } catch (error) {
      console.error('Ошибка при обновлении профиля:', error);
    }
  };


  if (isLoading) {
    return <PostSkeleton />;
  }


  const onClickRemove = () => {
    if (window.confirm('Вы действительно хотите удалить статью?')) {
      dispatch(fetchRemovePost(id))
    }
  };

  return (
    size ? (
      <div style={{ width: '35em', height: '25em', boxShadow: '0 2px 7px rgba(248, 248, 248, 0.25)' }} className={clsx(styles.root, { [styles.rootFull]: isFullPost })}>
        {isEditable && (
          <div className={styles.editButtons}>
            <Link to={`/posts/${id}/edit`}>
              <IconButton color="primary">
                <EditIcon />
              </IconButton>
            </Link>
            <IconButton onClick={onClickRemove} color="secondary">
              <DeleteIcon />
            </IconButton>
          </div>
        )}
        {imageUrl && (
          <img
            style={{ height: "55%" }}
            className={clsx(styles.image, { [styles.imageFull]: isFullPost })}
            src={imageUrl}
            alt={title}
          />
        )}
        <div className={styles.wrapper}>
          <UserInfo {...user} additionalText={createdAt.slice(0, 10).split('-').reverse().join('.')} />
          <div className={styles.indention}>
            <h2 style={{ fontSize: '1.3em' }} className={clsx(styles.title, { [styles.titleFull]: isFullPost })}>
              {isFullPost ? title : <Link to={`/posts/${id}`}>{title}</Link>}
            </h2>
            <ul className={styles.tags}>
              <li >
                <Link >#{tags[0]}</Link>
              </li>
            </ul>
            {children && <div className={styles.content}>{children}</div>}
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <ul className={styles.postDetails}>
                  <li>
                    <EyeIcon color='primary' />
                    <span>{viewsCount}</span>
                  </li>
                  <li>
                    <RateReviewIcon color='primary' />
                    <span>{estimation}</span>
                  </li>
                </ul>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5em' }}>
                {userData ?
                  <ul className={styles.postDetails}>
                    {like
                      ?
                      <li>
                        <Button color="inherit" size="small" onClick={onChangeLike}>
                          <FavoriteIcon style={{ color: 'red' }} />
                          <span>{likeArray?.length}</span>
                        </Button>
                      </li>
                      :
                      <li>
                        <Button color="inherit" size="small" onClick={onChangeLike}>
                          <FavoriteBorderIcon />
                          <span>{likeArray?.length}</span>
                        </Button>
                      </li>
                    }
                  </ul>
                  : ''}
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div style={{ width: '100%', height: 'auto', boxShadow: '0 2px 7px rgba(248, 248, 248, 0.25)' }} className={clsx(styles.root, { [styles.rootFull]: isFullPost })}>
        {isEditable && (
          <div className={styles.editButtons}>
            <Link to={`/posts/${id}/edit`}>
              <IconButton color="primary">
                <EditIcon />
              </IconButton>
            </Link>
            <IconButton onClick={onClickRemove} color="secondary">
              <DeleteIcon />
            </IconButton>
          </div>
        )}
        {imageUrl && (
          <img
            className={clsx(styles.image, { [styles.imageFull]: isFullPost })}
            src={imageUrl}
            alt={title}
          />
        )}
        <div className={styles.wrapper}>
          <UserInfo {...user} additionalText={createdAt.slice(0, 10).split('-').reverse().join('.')} />
          <div className={styles.indention}>
            <h2 style={{ fontSize: '2em' }} className={clsx(styles.title, { [styles.titleFull]: isFullPost })}>
              {isFullPost ? title : <Link to={`/posts/${id}`}>{title}</Link>}
            </h2>
            <ul className={styles.tags}>
              <li >
                <Link >#{tags[0]}</Link>
              </li>
            </ul>
            {children && <div className={styles.content}>{children}</div>}
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <ul className={styles.postDetails}>
                  <li>
                    <EyeIcon />
                    <span>{viewsCount}</span>
                  </li>
                  <li>
                    <RateReviewIcon />
                    <span>{estimation}</span>
                  </li>
                </ul>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5em' }}>
                {userData ?
                  <ul className={styles.postDetails}>
                    {like
                      ?
                      <li>
                        <Button color="inherit" size="small" onClick={onChangeLike}>
                          <FavoriteIcon style={{ color: 'red' }} />
                          <span>{likeArray?.length}</span>
                        </Button>
                      </li>
                      :
                      <li>
                        <Button color="inherit" size="small" onClick={onChangeLike}>
                          <FavoriteBorderIcon />
                          <span>{likeArray?.length}</span>
                        </Button>
                      </li>
                    }
                  </ul>
                  : ''}
              </div>
            </div>
          </div>
        </div>
      </div>
    )

  );
};
