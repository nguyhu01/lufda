

import React from 'react';
import { Link } from 'react-router-dom';
import '../Header.css';

function Header() {
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
            <li><Link to="/login" className="login-btn btn btn-success">LOGIN</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
