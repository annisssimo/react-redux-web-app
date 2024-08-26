import './index.css';
import { useGetUserQuery } from '../../features/apiSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../features/userSlice';
import { useState } from 'react';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  const { data: user, error, isLoading } = useGetUserQuery(username, { skip: !username });
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (user && user.length > 0) {
      dispatch(setUser(user[0]));
      navigate('/');
    } else if (!isLoading && error) {
      alert('User not found');
    } else if (user && user.length === 0) {
      alert('User not found');
    }
  };
  

  return (
    <div className="loginContainer">
      <h1>Login to MyApp</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input"
      />
      <button onClick={handleLogin} className="button">
        Submit
      </button>
    </div>
  );
};

export default Login;
