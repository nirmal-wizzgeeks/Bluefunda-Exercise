import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginComponent from './components/login'
import DashboardComponent from './components/dashboard';

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginComponent />} /> 
          <Route path="/dashboard" element={<DashboardComponent />} /> 
        </Routes>
    </BrowserRouter>
    
  );
}

export default App;
