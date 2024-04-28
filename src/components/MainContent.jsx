import React, { useEffect, useState } from 'react';
import GettingStarted from '../pages/GettingStarted';
import Degree from '../pages/Degree';
import BoostProfile from '../pages/BoostProfile';

function MainContent() {
  const [pageOrigin, setPageOrigin] = useState(window.location.origin);
  const [pageRef, setPageRef] = useState(window.location.pathname);

  /* Listen for changes in url and save new href */
  useEffect(() => {
    const updatePageRef = (path) => {
      console.log('heard a change in url with: ');
      console.log('pathname: ', path);
      console.log('query full url: ', window.location);
      setPageRef(window.location.pathname);
    } 
    window.addEventListener('popstate', () => updatePageRef(window.location.pathname));
  });

  return (
    <>
      { pageRef === '/' && <GettingStarted /> }
      { pageRef === '/#choose-degree' && <Degree /> }
      { pageRef === '/#boost-profile' && <BoostProfile /> }
    </>
  )
}

export default MainContent;