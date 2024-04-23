import React, { useEffect, useState } from 'react';
import { ThemeProvider, themeGet, BaseStyles, PageLayout, Header,
         Octicon, IconButton, Text, Heading
       } from '@primer/react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import FixedHeader from './components/FixedHeader';

function App() {
  const theme = { themeGet };
  const [colors, setColors] = useState('day');

  useEffect(() => {
    window.addEventListener('set night', () => setColors('night'));
    window.addEventListener('set day', () => setColors('day'));
  }, [colors])

  return (
    <ThemeProvider colorMode={colors} dayScheme='light' nightScheme='dark'>
      <BaseStyles>
        <FixedHeader sx={{bg: 'pink'}} />
        <PageLayout>
          <PageLayout.Content>
            <MainContent />
          </PageLayout.Content>
          <PageLayout.Pane resizable="true" position="start" hidden={{ narrow: true }}>
            <Sidebar />
          </PageLayout.Pane>
          {/* <PageLayout.Footer>
          </PageLayout.Footer> */}
        </PageLayout>
      </BaseStyles>
    </ThemeProvider>
  )
}

export default App;