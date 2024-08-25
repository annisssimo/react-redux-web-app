import React, { useState } from 'react';
import { useGetUserQuery } from '../../features/apiSlice';
// import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './index.css';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  const { data: user, error, isLoading } = useGetUserQuery(username, { skip: !username });
//   const dispatch = useDispatch();

  const handleLogin = () => {
    if (user && user.length > 0) {
      // Здесь нужно сохранить данные пользователя в глобальное хранилище
      navigate('/');
    } else if (!isLoading && error) {
      alert('User not found');
    }
  };

  return (
    <div className="loginContainer">
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
