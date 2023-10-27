import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Marksheet from './components/Marksheet';
import Navbar from './components/Navbar';
import About from './components/About';

function App() {
  const [searchbarText, setSearchbarText] = useState('');
  return (
    <>
      <Router>
        <Navbar title='SMART - SheetAnalyzer' searchbarText={searchbarText} setSearchbarText={setSearchbarText} />
        <Routes>
          <Route path='/' element={<Marksheet searchbarText={searchbarText} />} />
          <Route path='/about' element={<About appName="Smart-SheetAnalyzer" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
