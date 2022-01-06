
import React from 'react';
import './App.css';
import Home from './components/pages/HomePage';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer';
import Pricing from './components/Pricing';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Pricing />
        <Route path='/sign-up' component={SignUp} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
