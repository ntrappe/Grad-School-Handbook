import React, { useEffect, useState } from 'react';
import {ThemeProvider, BaseStyles, NavList, Heading} from '@primer/react'
import GettingStarted from '../pages/GettingStarted';
import Degree from '../pages/Degree';
import BoostProfile from '../pages/BoostProfile';

function MainContent() {
  const [pageRef, setPageRef] = useState(window.location.pathname);

  /* Listen for changes in url and save new href */
  useEffect(() => {
    window.addEventListener('popstate', () => setPageRef(window.location.pathname));
  });

  return (
    <ThemeProvider>
      <BaseStyles>
        { pageRef === '/' && <GettingStarted /> }
        { pageRef === '/choose-degree' && <Degree /> }
        { pageRef === '/boost-profile' && <BoostProfile /> }
      </BaseStyles>
    </ThemeProvider>
  )
}

export default MainContent;