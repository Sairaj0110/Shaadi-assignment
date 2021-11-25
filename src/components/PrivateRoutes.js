import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {  
  var loggedIn = localStorage.getItem('loggedIn');
  return JSON.parse(loggedIn) ? <Outlet /> : <Navigate to="/login" />;
};


export default PrivateRoute;