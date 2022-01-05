import React from 'react';
import './App.css';
import Navbar from './components/Navbar/index.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/HomePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact component={Home}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
