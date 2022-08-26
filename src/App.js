import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"

import { Loginpage } from './routes/loginpage';
import { Homepage } from './routes/homepage';
import { Profilepage } from './routes/profilepage';
import { Aboutpage } from './routes/aboutpage';
import { Confirmpage } from './routes/confirmpage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/profile" element={<Profilepage />} />
        <Route path="/confirm" element={<Confirmpage />} />
      </Routes>
    </BrowserRouter>
  );
}