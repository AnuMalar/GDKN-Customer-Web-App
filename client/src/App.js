
import React from "react";
import Login from './components/Login/Login'
import './App.css'
import {useStateValue} from './components/context/StateProvider'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from "./components/Details/Details";
import Sidebar from "./components/Sidebar/Sidebar";

//callback function of user
const App=()=> {
  const [{user}] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Router>
           <Sidebar />
            <Routes>
              <Route path="/rooms/:roomId" element={<Details />} />
              <Route exact path="/" element={<Details />} />
            </Routes>
          </Router>
        </div>
      )}
    </div>
  );
};

  


export default App;
