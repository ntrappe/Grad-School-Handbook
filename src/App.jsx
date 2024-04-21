import { ThemeProvider, BaseStyles, PageLayout, Header,
         Octicon, IconButton, 
       } from '@primer/react';
import { MortarBoardIcon, ThreeBarsIcon } from '@primer/octicons-react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent'

function App() {
  return (
    <ThemeProvider>
      <BaseStyles>
        <PageLayout>
          <PageLayout.Header>
            {/* <Header sx={{
              backgroundColor: 'white',
              borderBottomWidth: 1,
              borderBottomColor: 'border.default',
              borderBottomStyle: 'solid',
            }}>
              <Header.Item>
                <Header.Link href="/" sx={{fontSize: 2, color: 'black'}}>
                  <Octicon icon={MortarBoardIcon} size={32} sx={{mr: 2}} />
                  <span>The Grad School Handbook</span>
                </Header.Link>
              </Header.Item>
              <Header.Item sx={{mr: 0}} hidden={{ narrow: false }}>
                <IconButton aria-label="Open sidebar" icon={ThreeBarsIcon} />
              </Header.Item>
            </Header> */}
          </PageLayout.Header>
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