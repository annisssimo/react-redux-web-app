import './index.css';
import { useParams } from 'react-router-dom';
import { useGetPostsQuery } from '../../features/apiSlice';

import { useEffect, useState } from 'react';

const PostDetails: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const { data: posts } = useGetPostsQuery(null);
  const post = posts?.find((post: { id: number }) => post.id === Number(postId));

  const [comments, setComments] = useState([]);
  
  useEffect(() => {
    if (postId) {
      fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then((res) => res.json())
        .then((data) => setComments(data));
    }
  }, [postId]);

  if (!post) return <div>Post not found</div>;

  return (
    <div className="post-details">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <h3>Comments:</h3>
      <ul>
        {comments.map((comment: { id: number, name: string, body: string }) => (
          <li key={comment.id}>
            <strong>{comment.name}:</strong> {comment.body}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostDetails;
