import "./App.css";
import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showalert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showalert("Light mode has been disabled", "success");
    }
  };
  return (
    <>
      {/* <Navbar title="TextUtills" aboutText="About TextUtills" /> */}
      {/* <Navbar/> */}
     {/* <BrowserRouter> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes> 
            <Route path="/about" element={<About mode={mode} />}>
              
            </Route> */}
            {/*<Route path="/" element={ */}<TextForm
                showalert={showalert}
                heading="ManupulateText - word counter, Character counter, Remove extra spaces"
                mode={mode}
            />}> 
             
           {/* </Route> */}
          { /*</Routes> */}
        </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
