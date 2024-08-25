import'./index.css';

interface PostProps {
  title: string;
  body: string;
}

const Post: React.FC<PostProps> = ({ title, body }) => {
  return (
    <div className="post">
      <img src="https://via.placeholder.com/150" alt="Post Image" className="image" />
      <div className="content">
        <h2 className="title">{title}</h2>
        <p className="body">{body}</p>
      </div>
    </div>
  );
};

export default Post;
