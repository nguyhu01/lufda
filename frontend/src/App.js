import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import AboutTeam from './components/AboutTeam'; //Need to make a different page for this
import Games from './components/Games';
import Blog from './components/Blog';
import Contact from './components/Contact';
import LoginForm from './components/LoginForm';
import PracticeSchedule from './components/PracticeSchedule';
import './App.css';

function App() {
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
          <Route path="/login" element={<LoginForm />} />
          <Route path="/practice-schedule" element={<PracticeSchedule />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
