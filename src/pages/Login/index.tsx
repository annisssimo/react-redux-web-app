import styles from './Login.module.css';
import { useGetUserQuery } from '../../features/apiSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../features/userSlice';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      toast.error('User not found');
    } else if (user && user.length === 0) {
      toast.error('User not found');
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.petEmoji}>🐾</div>
      <h1>Sign In to MyApp</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className={styles.input}
      />
      <button onClick={handleLogin} className={styles.button}>
        Submit
      </button>
      <ToastContainer />
    </div>
  );
};

export default Login;
