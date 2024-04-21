import React, { useEffect, useState } from 'react';
import {ThemeProvider, BaseStyles, NavList, Heading} from '@primer/react'
import GettingStarted from '../pages/GettingStarted';
import Degree from '../pages/Degree';
import Area from '../pages/Area';
import Growth from '../pages/Growth';

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
        { pageRef === '/degree' && <Degree /> }
        { pageRef === '/area' && <Area /> }
        { pageRef === '/growth' && <Growth /> }
      </BaseStyles>
    </ThemeProvider>
  )
}

export default MainContent;