import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GettingStarted from '../pages/GettingStarted';
import Degree from '../pages/Degree';
import BoostProfile from '../pages/BoostProfile';
import PrepareMaterials from '../pages/PrepareMaterials';
import BuildTeam from '../pages/BuildTeam';
import PageNotFound from '../pages/PageNotFound';

function MainContent() {
  return (
    <Routes>
      <Route path='/' element={<GettingStarted />} />
      <Route path='/choose-degree' element={<Degree />} />
      <Route path='/boost-profile' element={<BoostProfile />} />
      <Route path='/prepare-materials' element={<PrepareMaterials />} />
      <Route path='/build-team' element={<BuildTeam />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  )
}

export default MainContent;