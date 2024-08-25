import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">MyApp</Link>
      </div>
      <div className="authButton">
        <Link to="/login" className="loginButton">
          Sign In
        </Link>
      </div>
    </header>
  );
};

export default Header;
