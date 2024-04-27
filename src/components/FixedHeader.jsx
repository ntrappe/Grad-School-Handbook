import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useTheme, Octicon, IconButton, Text, ActionMenu, ActionList, Box } from '@primer/react';
import { FeedTrophyIcon, ThreeBarsIcon, MoonIcon, SunIcon, CheckIcon,
         EyeIcon, EyeClosedIcon
       } from '@primer/octicons-react';
import { useColorSchemeVar } from '@primer/react';
import { Hidden } from '@primer/react/drafts';
import { handleColorSelect, getProgressVisibility } from '../lib/helpers';
import { SET_DARK_EVENT, SET_LIGHT_EVENT, OPEN_MENU_EVENT, LIGHT_THEME, DARK_THEME, STATUS_VISIBLE,
        STATUS_HIDDEN, STORAGE_PROGESS_VISIBILITY, SHOW_PROGRESS_EVENT, HIDE_PROGRESS_EVENT,
       } from '../lib/constants';


const HeaderWrapper = styled.div`
  border-color: ${props => props.borderColor};
  background-color: ${props => props.bg};
`;

function FixedHeader() {
  const { colorMode } = useTheme();       // Retrieve theme from ancestor ThemeProvider
  const [lightSelected, setLightSelected] = useState(colorMode === LIGHT_THEME);
  const [progressVisibility, setProgressVisibility] = useState(getProgressVisibility);

  /* TODO: Could extend theme and add these instead */
  const customBackground = useColorSchemeVar({
    light: '#F6F8FA',   
    dark: '#020408',
  });

  const customBorder = useColorSchemeVar({
    light: '#D1D7DD',
    dark: '#31363C',
  });
 
  /**
   * When selection is made, function is called with the selection (status)
   * and it will update local variable (to det. if selected) and fire off
   * event notifying other components that the selection was changed.
   * @param {String} status STATUS_VISIBLE or STATUS_HIDDEN only
   */
  const handleProgressSelect = (status) => {
    if (status === STATUS_VISIBLE) {
      setProgressVisibility(STATUS_VISIBLE);
      window.dispatchEvent(new Event(SHOW_PROGRESS_EVENT));
      window.localStorage.setItem(STORAGE_PROGESS_VISIBILITY, STATUS_VISIBLE);
    } else {
      setProgressVisibility(STATUS_HIDDEN);
      window.dispatchEvent(new Event(HIDE_PROGRESS_EVENT));
      window.localStorage.setItem(STORAGE_PROGESS_VISIBILITY, STATUS_HIDDEN);
    }
  }

  /**
   * Listens for any type of color selection (in header or mobile menu) and
   * updates the check mark for which mode is selected.
   */
  useEffect(() => {
    window.addEventListener(SET_DARK_EVENT, () => setLightSelected(false));
    window.addEventListener(SET_LIGHT_EVENT, () => setLightSelected(true));
  }, [lightSelected]);

  return (
    <HeaderWrapper id='header-wrapper' bg={customBackground} borderColor={customBorder}>
      <Box as='a' id='header-title' href='/' className='color-fg-default'>
        <Octicon icon={FeedTrophyIcon} size={20} aria-label='trophy-icon'/>
        <Text fontWeight='bold' fontSize={2}>The Grad School Handbook</Text>
      </Box>
      <div id='action-group'>
        <Hidden when={['narrow']}>
          <ActionMenu>
            <ActionMenu.Button>
              <Box sx={{color: 'fg.muted', display: 'inline-block'}}>
                Progress:
              </Box>{' '}
              {progressVisibility}
            </ActionMenu.Button>
            <ActionMenu.Overlay width='auto' side='outside-bottom'>
              <ActionList selectionVariant='single'>
                <ActionList.Item
                  selected={progressVisibility === STATUS_VISIBLE}
                  onSelect={() => handleProgressSelect(STATUS_VISIBLE)}
                >
                  {STATUS_VISIBLE}
                  <ActionList.TrailingVisual>
                    <EyeIcon className='color-fg-sponsors' />
                  </ActionList.TrailingVisual>
                </ActionList.Item>
                <ActionList.Item
                  selected={progressVisibility === STATUS_HIDDEN}
                  onSelect={() => handleProgressSelect(STATUS_HIDDEN)}
                >
                  {STATUS_HIDDEN}
                  <ActionList.TrailingVisual>
                    <EyeClosedIcon className='color-fg-overlay' />
                  </ActionList.TrailingVisual>
                </ActionList.Item>
              </ActionList>
            </ActionMenu.Overlay>
          </ActionMenu>
        </Hidden>
        <Hidden when={['narrow']}>
          <ActionMenu id='action-menu-color'>
            <ActionMenu.Button sx={{marginLeft: '5px'}}>Color Mode</ActionMenu.Button>
            <ActionMenu.Overlay id='action-overlay' width='auto' side='outside-bottom'>
              <ActionList selectionVariant='single'>
                <ActionList.Item 
                  selected={lightSelected}
                  onSelect={() => handleColorSelect(LIGHT_THEME)}>
                  Light Mode
                  <ActionList.TrailingVisual>
                    <SunIcon className='color-fg-attention' />
                  </ActionList.TrailingVisual>
                </ActionList.Item>
                <ActionList.Item 
                  selected={!lightSelected}
                  onSelect={() => handleColorSelect(DARK_THEME)}>
                  Dark Mode
                  <ActionList.TrailingVisual>
                    <MoonIcon className='color-fg-overlay' />
                  </ActionList.TrailingVisual>
                </ActionList.Item>
              </ActionList>
            </ActionMenu.Overlay>
          </ActionMenu>
        </Hidden>
        <Hidden when={['regular', 'wide']}>
          <IconButton 
            icon={ThreeBarsIcon}
            aria-labelledby={OPEN_MENU_EVENT }
            onClick={() => window.dispatchEvent(new Event(OPEN_MENU_EVENT))}
            sx={{marginLeft: '10px'}}
          ></IconButton>
        </Hidden>
      </div>
    </HeaderWrapper>
  )
}

export default FixedHeader;