import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import GettingStarted from '../pages/GettingStarted';
import Degree from '../pages/Degree';
import BoostProfile from '../pages/BoostProfile';

function MainContent() {
  const [pageOrigin, setPageOrigin] = useState(window.location.origin);
  const [pageRef, setPageRef] = useState(window.location.pathname);

  /* Listen for changes in url and save new href */
  useEffect(() => {
    const updatePageRef = () => {
      console.log('query full url: ', window.location);
    } 
    window.addEventListener('popstate', () => updatePageRef());
  });

  return (
    <Routes>
      <Route path='/' element={<GettingStarted />} />
      <Route path='/choose-degree' element={<Degree />} />
      <Route path='/boost-profile' element={<BoostProfile />} />
    </Routes>
  )
}

export default MainContent;