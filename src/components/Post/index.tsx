import styles from './Post.module.css';
import { Link } from 'react-router-dom';

interface PostProps {
  id: number;
  title: string;
  body: string;
}

const Post: React.FC<PostProps> = ({ id, title, body }) => {
  return (
    <Link to={`/post/${id}`} className={styles.post}>
      <img src="https://via.placeholder.com/150" alt="Post Image" className={styles.image} />
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.body}>{body}</p>
      </div>
    </Link>
  );
};

export default Post;
