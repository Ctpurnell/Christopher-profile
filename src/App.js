import React, { useState } from 'react';

import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './App.css';

function App() {


  const [currentPage, setCurrentPage] = useState('About-Me');

  
  const renderPage = () => {
    if (currentPage === 'About-Me') {
      return <AboutMe />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);




  return (
    <div>
      <Header handlePageChange={handlePageChange} /> 
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
