
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import { getAuth, signOut } from 'firebase/auth';
import '../Header.css';

function Header() {
  const { currentUser } = useContext(AuthContext);
  const navigate  = useNavigate ();
  const auth = getAuth();

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/login');
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('header');
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header id="header">
      <div className="header-content">
        <Link to="/" className="logo">
          <img src="/static/img/lufda.jpg" alt="Lufda logo" />
          <span className='lufda-header'>LUFDA</span>
        </Link>
        <nav>
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/games">GAMES</Link></li>
            <li><Link to="/blog">BLOG</Link></li>
            <li><Link to="/contact">CONTACT</Link></li>
            {currentUser ? (
              <>
              <li><Link to="/practice-schedule">SCHEDULES</Link></li>
              <li>
                <button onClick={handleLogout} className="logout-btn btn btn-danger">
                  LOGOUT
                </button>
              </li>
              </>
            ) : (
              <li><Link to="/login" className="login-btn btn btn-success">LOGIN</Link></li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
