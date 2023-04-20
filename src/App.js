import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes >
        <Route path='/' element={<HomePage />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
