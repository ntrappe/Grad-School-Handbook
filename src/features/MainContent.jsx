import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GettingStarted from '../pages/GettingStarted';
// import BuildTeam from '../pages/BuildTeam';
import PageNotFound from '../pages/PageNotFound';

function MainContent() {
  return (
    <Routes>
      <Route path='/' element={<GettingStarted />} />
      {/* <Route path='/build-team' element={<BuildTeam />} /> */}
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  )
}

export default MainContent;