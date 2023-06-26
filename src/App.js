//import logo from './logo.svg';

import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";



function App() {
  const [Mode, setMode] = useState('light');  // tells whether dark mode is enabled or not
  const [alert, setAlert] = useState(null)
  const showAlert=(message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = ()=>{
    if(Mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark Mode has been enabled","success")
    } 
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been enabled","success")
    }
  }
  return (
    <> 
    <BrowserRouter>
      <Navbar title = "TextUtils"  mode={Mode}  toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
            <Route exact path="/about" element={<About/>}>
            </Route>
            <Route exact path="/" element={
              <TextForm showAlert={showAlert} heading='Enter the text to analyse' mode={Mode}/>}>
            </Route>
      </Routes>
      </div>
    </BrowserRouter>   
    </>
  );
}

export default App;
