import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginComponent from './components/login'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginComponent />} /> 
        {/* <Route path="/dashboard" element={<Dashboard />} />  */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
