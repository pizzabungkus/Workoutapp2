import React from "react";
import { NavLink, Route, Routes, Navigate } from "react-router-dom";
import './App.css'
import Home from "./Pages/home";
import About from "./Pages/About";
import Workout from "./Pages/workout";
import Planning from "./Pages/planning";
import Workoutdetail from "./Pages/workoutdetail";
import Planningdetail from "./Pages/planningdetail";


function App(){
  return(
    <div className="app">
      <header className = "header">
        <div className = "containerhead">
          <p>
            Workout app
          </p>
    
 
        </div>
      </header>
      <div className="content">
        <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/workout" element={<Workout />}></Route>
          <Route path="/planning" element={<Planning />}></Route>
          <Route path="/workoutdetail/:itemId" element={<Workoutdetail />}></Route>
          <Route path="/planningdetail/:itemId" element={<Planningdetail />}></Route>

        </Routes>
        <footer>
          <div className="containernav">
            <NavLink to="/home" className="iconwrapper">
              <h3>Home</h3>
            </NavLink>
            <NavLink to="/workout" className="iconwrapper">
            <h3>Workout</h3>
            </NavLink>
            <NavLink to="/planning" className="iconwrapper">
            <h3>Planning</h3>
            </NavLink>
            <NavLink to="/about" className="iconwrapper">
            <h3>About</h3>
            </NavLink>
          </div>
        </footer>
      </div>
    </div>
  );

}

export default App;