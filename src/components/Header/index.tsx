import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearUser } from '../../features/userSlice';
import { RootState } from '../../store/store';
import './index.css';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.user);

  const handleLogout = () => {
    dispatch(clearUser());
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">MyApp 🐾</Link>
      </div>
      <div className="authSection">
        {user ? (
          <>
            <span className="greeting">Hello, {user.name}!</span>
            <button onClick={handleLogout} className="logoutButton">
              Log Out
            </button>
          </>
        ) : (
          <Link to="/login" className="loginButton">
            Sign In
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
