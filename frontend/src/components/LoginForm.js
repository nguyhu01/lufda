

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../LoginForm.css';
import { auth } from '../firebase'; 
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';


const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberMe: false
  });

  const [error, setError] = useState('');
  const navigate = useNavigate(); 
  const auth = getAuth(); 

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = formData;

    try {
      await signInWithEmailAndPassword(auth, username, password);
      console.log('User signed in:', username);
      navigate('/practice-schedule'); 
    } catch (error) {
      console.error('Error signing in:', error.message);
      setError(error.message); // Set error message
    }
  };

  return (
    <div className="login-page">
      <div className="login-wrap">
        <div className="login-html">
          <div className="login-form">
            <form onSubmit={handleSubmit}>
              <div className='sign-in-htm'>
                <div className="group">
                  <label htmlFor="user" className="label">Username</label>
                  <input 
                    id="user" 
                    type="text" 
                    className="input" 
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="group">
                  <label htmlFor="pass" className="label">Password</label>
                  <input 
                    id="pass" 
                    type="password" 
                    className="input" 
                    data-type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="group">
                  <input 
                    id="check" 
                    type="checkbox" 
                    className="check" 
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="check"><span className="icon"></span> Keep me signed in</label>
                </div>
                <div className="group">
                  <input type="submit" className="button" value="Sign In" />
                </div>
                {error && (
                  <div className="error-message">
                    {error}
                  </div>
                )}
                <div className="hr"></div>
                <div className="foot-lnk">
                  <a href="#forgot">Forgot Password?</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
