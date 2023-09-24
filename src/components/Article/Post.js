import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { fetchRemovePost } from '../redux/slices/posts';

import clsx from 'clsx';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import EyeIcon from '@mui/icons-material/RemoveRedEyeOutlined';
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
  estimation
}) => {
  const [postSize, setPostSize] = useState(size)
  const dispatch = useDispatch()

  useEffect(() => {
    setPostSize(size)
  }, [postSize])
  
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
      <div style={{ width: '35em', height: '25em', boxShadow: '0 2px 7px rgba(248, 248, 248, 0.25)'}} className={clsx(styles.root, { [styles.rootFull]: isFullPost })}>
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
        <UserInfo {...user} additionalText={createdAt} />
        <div className={styles.indention}>
          <h2 style={{fontSize: '2em'}} className={clsx(styles.title, { [styles.titleFull]: isFullPost })}>
            {isFullPost ? title : <Link to={`/posts/${id}`}>{title}</Link>}
          </h2>
          <ul className={styles.tags}>
            <li >
              <Link >#{tags[0]}</Link>
            </li>
          </ul>
          {children && <div className={styles.content}>{children}</div>}
          <ul className={styles.postDetails}>
            <li>
              <EyeIcon />
              <span>{viewsCount}</span>
            </li>
            <li>
              <ThumbUpIcon />
              <span>{estimation}</span>
            </li>
          </ul>
        </div>
      </div>
      </div>
    ) : (
      <div style={{ width: '100%', height: 'auto', boxShadow: '0 2px 7px rgba(248, 248, 248, 0.25)'}} className={clsx(styles.root, { [styles.rootFull]: isFullPost })}>
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
        <UserInfo {...user} additionalText={createdAt} />
        <div className={styles.indention}>
          <h2 style={{fontSize: '2em'}} className={clsx(styles.title, { [styles.titleFull]: isFullPost })}>
            {isFullPost ? title : <Link to={`/posts/${id}`}>{title}</Link>}
          </h2>
          <ul className={styles.tags}>
            <li >
              <Link >#{tags[0]}</Link>
            </li>
          </ul>
          {children && <div className={styles.content}>{children}</div>}
          <ul className={styles.postDetails}>
            <li>
              <EyeIcon />
              <span>{viewsCount}</span>
            </li>
            <li>
              <ThumbUpIcon />
              <span>{estimation}</span>
            </li>
          </ul>
        </div>
      </div>
      </div>
    )
    
    // <div style={{ width: '35em', height: '25em', boxShadow: '0 2px 7px rgba(248, 248, 248, 0.25)'}} className={clsx(styles.root, { [styles.rootFull]: isFullPost })}>
    // <div style={{ width: '100%', height: 'auto', boxShadow: '0 2px 7px rgba(248, 248, 248, 0.25)'}} className={clsx(styles.root, { [styles.rootFull]: isFullPost })}>
      
      
  );
};
