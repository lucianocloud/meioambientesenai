import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
