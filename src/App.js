
import './App.css';

import React, { useState } from "react";
import Footer from './components/Footer/Footer';
import SearchBar from './components/SearchBar/SearchBar';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  const [subButton,SetSubButton]=useState(false)
  return (
    
      <div className="App">
      <Sidebar subButton={subButton}/>
      <SearchBar />
      <Footer />
      
    </div>

    
  );
}

export default App;
