import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearUser } from '../../features/userSlice';
import { RootState } from '../../store/store';
import styles from './Header.module.css'

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.user);

  const handleLogout = () => {
    dispatch(clearUser());
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">MyApp 🐾</Link>
      </div>
      <div className="styles.authSection">
        {user ? (
          <>
            <span className={styles.greeting}>Hello, {user.name}!</span>
            <button onClick={handleLogout} className={styles.logoutButton}>
              Log Out
            </button>
          </>
        ) : (
          <Link to="/login" className={styles.loginButton}>
            Sign In
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
