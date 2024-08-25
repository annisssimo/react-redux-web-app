import Post from '../../components/Post';
import { useGetPostsQuery } from '../../features/apiSlice';
import './index.css';


const Home: React.FC = () => {
  const { data: posts, error, isLoading } = useGetPostsQuery(null);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error occurred: {error.toString()}</div>;

  return (
<div className="container">
      {posts?.map((post: { id: number; title: string; body: string }) => (
        <Post key={post.id} title={post.title} body={post.body} />
      ))}
    </div>
  );
};

export default Home;
