import React from 'react';
import { Routes, Route } from 'react-router-dom';
import EditCvPage from './pages/EditCvPage';
import PreviewPage from './pages/PreviewPage';
import SettingsPage from './pages/SettingsPage';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<EditCvPage />} />
          <Route path="/editor" element={<EditCvPage />} />
          <Route path="/preview" element={<PreviewPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
