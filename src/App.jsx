import React, { useEffect, useState } from 'react';
import { ThemeProvider, themeGet, BaseStyles, SplitPageLayout, Header,
         Octicon, IconButton, Text, Heading
       } from '@primer/react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import FixedHeader from './components/FixedHeader';

function App() {
  const theme = { themeGet };
  const [colors, setColors] = useState('day');
  const [hideSidebar, setHideSidebar] = useState({ narrow: true });

  useEffect(() => {
    window.addEventListener('set night', () => setColors('night'));
    window.addEventListener('set day', () => setColors('day'));
  }, [colors]);

  useEffect(() => {
    window.addEventListener('open sidebar', () => setHideSidebar(false));
    window.addEventListener('close sidebar', () => {
      setHideSidebar({ narrow: true });
    });
  }, [hideSidebar]);

  return (
    <ThemeProvider colorMode={colors} dayScheme='light' nightScheme='dark'>
      <BaseStyles>
        <FixedHeader id='headerxx' className='supp' />
        <SplitPageLayout sx={{marginTop: '3em'}}>
          <SplitPageLayout.Content>
            <MainContent />
          </SplitPageLayout.Content>
          <SplitPageLayout.Pane
              id='menu'
              resizable='true' 
              aria-labelledby='menu' 
              position='start' 
              hidden={hideSidebar}
          >
            <Sidebar />
          </SplitPageLayout.Pane>
          {/* <PageLayout.Footer>
          </PageLayout.Footer> */}
        </SplitPageLayout>
      </BaseStyles>
    </ThemeProvider>
  )
}

export default App;