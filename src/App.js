import "./App.css";
import About from "./components/About";
import Navbar from'./components/Navbar';
import TextForm from "./components/TextForm";
import React, { useState } from 'react';
import Alert from "./components/Alert";

import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Routes
  // Link
} from "react-router-dom";

function App() {
  const[mode, setMode] = useState('light'); //Wheather dark mode is enable or not

  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500)
  }

  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title='TextUtils - Dark Mode';

      // setInterval(()=>{
        // document.title='TextUtils is Amazing mode';
      // }, 2000);

      // setInterval(()=>{
        // document.title='Install TextUtils Now';
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled", "success");
      document.title='TextUtils - Light Mode';
    }
  }
  return (
    <>
      {/* <Navbar title="TextUtils2" AboutText="About TextUtils"/> */}
      {/* <Navbar/> */}
      <Router>
        <Navbar mode={mode} title="TextUtils" aboutText="About" toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3" >
          <Routes>
            <Route exact path="/about" element={<About />}/>
            <Route exact path="/" element={<TextForm  showAlert={showAlert} mode={mode} heading="Enter the text to analyze below"/>}/>
          </Routes>
        </div>
      </Router>  
    </>
  );
}

export default App;
