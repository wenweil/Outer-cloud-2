import './App.css';
import React from "react";
import { Route, Routes } from 'react-router-dom';
import { Home } from './component/Home';
import { Index } from './component/Index';

function App() {

  return (
    <Routes>
      <Route path="/" exact element={<Home/>} />
      <Route path="/dash-board" element={<Index/>} />
    </Routes>
  );
}

export default App;
