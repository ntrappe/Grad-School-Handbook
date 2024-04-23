import React, { useEffect, useState } from 'react';
import { ThemeProvider, themeGet, BaseStyles, SplitPageLayout, Header,
         Octicon, IconButton, Text, Heading, Pagination,
       } from '@primer/react';
import MenuList from './components/MenuList';
import MainContent from './components/MainContent';
import FixedHeader from './components/FixedHeader';
import MobileMenu from './components/MobileMenu';
import { Hidden } from '@primer/react/drafts';

function App() {
  const [colors, setColors] = useState('day');
  // const [hideSidebar, setHideSidebar] = useState({ narrow: true });
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    window.addEventListener('set night', () => setColors('night'));
    window.addEventListener('set day', () => setColors('day'));
  }, [colors]);

  // useEffect(() => {
  //   window.addEventListener('open sidebar', () => setHideSidebar(false));
  //   window.addEventListener('close sidebar', () => {
  //     setHideSidebar({ narrow: true });
  //   });
  // }, [hideSidebar]);

  useEffect(() => {
    window.addEventListener('open menu', () => setShowMobileMenu(true));
    window.addEventListener('close menu', () => setShowMobileMenu(false));
  }, [showMobileMenu]);

  useEffect(() => {
    window.addEventListener('resize', () => {
      // if mobile menu open & exceed narrow size, close menu by default
      if (window.innerWidth >= 768 && showMobileMenu) {
        setShowMobileMenu(false);
      }
    });
  }, [showMobileMenu])

  return (
    <ThemeProvider colorMode={colors} dayScheme='light' nightScheme='dark'>
      <BaseStyles>
        <FixedHeader />
        <Hidden when={['regular', 'wide']}>
          {showMobileMenu && <MobileMenu />}
        </Hidden>
        <SplitPageLayout sx={{marginTop: '3em'}}>
          <SplitPageLayout.Content>
            <MainContent />
            {/* <Pagination pageCount={3} currentPage={1} showPages={{ narrow: false }}/> */}
          </SplitPageLayout.Content>
          <SplitPageLayout.Pane
              id='menu'
              resizable='true' 
              aria-labelledby='menu' 
              position='start' 
              hidden={{ narrow: true }}
          >
            <MenuList />
          </SplitPageLayout.Pane>
          {/* <SplitPageLayout.Footer>
          </SplitPageLayout.Footer> */}
        </SplitPageLayout>
      </BaseStyles>
    </ThemeProvider>
  )
}

export default App;