import React, { useEffect, useState } from 'react';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider, BaseStyles, SplitPageLayout } from '@primer/react';
import MenuList from './features/MenuList';
import MainContent from './features/MainContent';
import FixedHeader from './features/FixedHeader';
import MobileMenu from './features/MobileMenu';
import { setDefaultColorScheme } from './lib/helpers';
import { LIGHT_THEME, DARK_THEME, STORAGE_THEME, BODY_THEME, SET_DARK_EVENT, SET_LIGHT_EVENT,
         OPEN_MENU_EVENT, CLOSE_MENU_EVENT, HEADER_LAYOUT_GAP,
       } from './lib/constants';
import styled from 'styled-components';

const NARROW_PIXELS = 768;

const StyledSection = styled.div`
  height: 70%;
  background-color: teal;

  button {
    margin-top: 6rem;
  }
`;

const StyledPageLayout = styled(SplitPageLayout)`
  background-color: orange !important;
  height: 100vh;
  width: 100%;
`;

const StyledHeader = styled(SplitPageLayout.Header)`
  display: flex;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  left: 0;
  background-color: pink;
  z-index: 99;
  width: 100%;
`;

function App() {
  const [colorMode, setColorMode] = useState(setDefaultColorScheme());
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [selectedPage, setSelectedPage] = useState(0);

  /**
   * [Helper] Given a selected color mode, sets the data color scheme 
   * across ThemeProvider and localStorage to save it 
   * @param {String} scheme Name of the data color scheme
   */
  const setColorScheme = (scheme) => {
    if (scheme != LIGHT_THEME && scheme != DARK_THEME) {
      console.error('Received invalid color scheme @App: ', scheme);
    } else {
      setColorMode(scheme);
      window.localStorage.setItem(STORAGE_THEME, scheme);
      document.getElementById('body').setAttribute(BODY_THEME, scheme);
    }
  }

  /**
   * Users can select a color scheme in the header or mobile menu. Listen for
   * selection then call on helper function to update values.
   */
  useEffect(() => {
    window.addEventListener(SET_DARK_EVENT, () => setColorScheme(DARK_THEME));
    window.addEventListener(SET_LIGHT_EVENT, () => setColorScheme(LIGHT_THEME));
  }, [colorMode]);

  /**
   * If button is clicked to open or close mobile menu, listen for selection.
   * Then call on helper functions so we can block out main content hidden below.
   */
  useEffect(() => {
    window.addEventListener(OPEN_MENU_EVENT, () => setShowMobileMenu(true));
    window.addEventListener(CLOSE_MENU_EVENT, () => setShowMobileMenu(false));
  }, [showMobileMenu]);

  /**
   * If mobile menu is open and screen size is expanded past narrow (mobile), 
   * close menu by default.
   */
  useEffect(() => {
    window.addEventListener('resize', () => {
      // if mobile menu open & exceed narrow size, close menu by default
      if (window.innerWidth >= NARROW_PIXELS && showMobileMenu) {
        setShowMobileMenu(false);
      }
    });
  }, [showMobileMenu])

  return (
    <ThemeProvider id='theme-provider' colorMode={colorMode}>
      <BaseStyles>
        <HashRouter>
          <StyledPageLayout className='page-layout'>
            <StyledHeader className='header'>
              ok
            </StyledHeader>
            {!showMobileMenu && (
              <SplitPageLayout.Content>
                sup bro
              </SplitPageLayout.Content>
            )}
          </StyledPageLayout>
        </HashRouter>
      </BaseStyles>
    </ThemeProvider>
  )
}

export default App;