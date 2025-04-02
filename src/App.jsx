import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ProfileListPage from './pages/ProfileListPage';
import ProfileDetailPage from './pages/ProfileDetailPage';
import { profiles as initialProfiles } from './data/profiles'; 
import './App.css'; 

function App() {
  
  const [profiles] = useState(initialProfiles);

  return (
    <div className="app-container">
      <h1>People Finder</h1> 
      
      <Routes>
        <Route
          path="/"
          element={<ProfileListPage profiles={profiles} />}
        />

        <Route
          path="/profile/:id"
          element={<ProfileDetailPage profiles={profiles} />}  />

 
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </div>
  );
}

export default App;
