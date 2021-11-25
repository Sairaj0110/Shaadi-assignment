import Login from './components/login';
import './App.css';
import React from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoute from "./components/PrivateRoutes";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/home" element={<PrivateRoute />}>
            <Route path="/home" element={<Home />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
