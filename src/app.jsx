import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbr from './components/Navbr';

const App = () => {
  return (
    <BrowserRouter>
      <Navbr />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/classroom" element={<Classroom />} />
        <Route path="/assessment" element={<Assessment />} />
        <Route path="/store" element={<Store />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/news" element={<News />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/myaccount" element={<MyAccount />} />
        <Route path="/profile/mysettings" element={<MySettings />} />
        <Route path="*" element={<Classroom />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
