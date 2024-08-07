import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthContext } from './components/AuthContext';
import Header from './components/Header';
import Home from './components/Home';
import AboutTeam from './components/AboutTeam'; //Need to make a different page for this
import Games from './components/Games';
import Blog from './components/Blog';
import Contact from './components/Contact';
import LoginForm from './components/LoginForm';
import PracticeSchedule from './components/PracticeSchedule';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {
  const { currentUser } = useContext(AuthContext); // This accesses the currentUser from AuthContext
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutTeam />} />
          <Route path="/games" element={<Games />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/login" element={<LoginForm />} /> */}
          <Route path="/login" element={currentUser ? <Navigate to="/practice-schedule" /> : <LoginForm />} />
          <Route element={<PrivateRoute />}>
              <Route path="/practice-schedule" element={<PracticeSchedule />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
