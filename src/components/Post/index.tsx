import'./index.css';
import { Link } from 'react-router-dom';

interface PostProps {
  id: number;
  title: string;
  body: string;
}

const Post: React.FC<PostProps> = ({ id, title, body }) => {
  return (
    <Link to={`/post/${id}`} className="post">
      <img src="https://via.placeholder.com/150" alt="Post Image" className="image" />
      <div className="content">
        <h2 className="title">{title}</h2>
        <p className="body">{body}</p>
      </div>
    </Link>
  );
};

export default Post;
