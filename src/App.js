import React, { useState, useEffect } from 'react';
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
  
 setTimeout(() => {
    alert(`Add the subjects names first under the Subject.1, Subject.2, Subject.3, Subject.4 & Subject.5 one by one simultaneously then continue with Add Row.`);
}, 2000);
  
  return (
    <>
      <Router>
        <Navbar title='SMART-SheetAnalyzer' searchbarText={searchbarText} setSearchbarText={setSearchbarText} />
        <Routes>
          <Route path='/' element={<Marksheet searchbarText={searchbarText} />} />
          <Route path='/about' element={<About appName="SMART-SheetAnalyzer" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
