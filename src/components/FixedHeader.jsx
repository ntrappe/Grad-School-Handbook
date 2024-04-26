import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useTheme, Octicon, IconButton, Text, ActionMenu, ActionList } from '@primer/react';
import { FeedTrophyIcon, ThreeBarsIcon, MoonIcon, SunIcon, CheckIcon } from '@primer/octicons-react';
import { useColorSchemeVar } from '@primer/react';
import { Hidden } from '@primer/react/drafts';

const LIGHT_THEME = 'day';
const DARK_THEME = 'night';
const STORAGE_THEME = 'data-color-scheme';
const BODY_THEME = 'data-color-mode';
const SET_DARK_EVENT = 'set night';
const SET_LIGHT_EVENT = 'set day';
const OPEN_MENU_EVENT = 'open menu';

const HeaderWrapper = styled.div`
  border-color: ${props => props.borderColor};
  background-color: ${props => props.bg};
`;

function FixedHeader() {
  const { colorMode } = useTheme();       // Retrieve theme from ancestor ThemeProvider
  const [lightSelected, setLightSelected] = useState(colorMode === LIGHT_THEME);

  /* Replace with colors.light from @primer/primitives when works */
  const customBackground = useColorSchemeVar({
    light: '#F6F8FA',   
    dark: '#020408',
  });

  const customBorder = useColorSchemeVar({
    light: '#D1D7DD',
    dark: '#31363C',
  });

  /**
   * Once user has selected an option, fire off event to update system colors
   * @param {String} scheme Name of color data mode
   */
  const handleColorSelect = (scheme) => {
    if (scheme === LIGHT_THEME) {
      window.dispatchEvent(new Event(SET_LIGHT_EVENT));
    } else if (scheme === DARK_THEME) {
      window.dispatchEvent(new Event(SET_DARK_EVENT));
    } else {
      console.error('Invalid color scheme @FixedHeader: ', scheme);
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
      <div id='header-title' href='/' className='color-fg-default'>
        <Octicon icon={FeedTrophyIcon} size={20} aria-label='trophy-icon'/>
        <Text fontWeight='bold' fontSize={2}>The Grad School Handbook</Text>
      </div>
      <div id='action-group'>
        <Hidden when={['narrow']}>
          <ActionMenu id='action-menu'>
            <ActionMenu.Button>Color Mode</ActionMenu.Button>
            <ActionMenu.Overlay id='action-overlay' width='small' side='outside-bottom'>
              <ActionList>
                <ActionList.Item onSelect={() => handleColorSelect(LIGHT_THEME)}>
                  <ActionList.LeadingVisual>
                    <SunIcon />
                  </ActionList.LeadingVisual>
                  Light Mode
                  {lightSelected && 
                    <ActionList.TrailingVisual>
                      <CheckIcon className='color-fg-success' />
                    </ActionList.TrailingVisual>
                  }
                </ActionList.Item>
                <ActionList.Item onSelect={() => handleColorSelect(DARK_THEME)}>
                  <ActionList.LeadingVisual>
                    <MoonIcon />
                  </ActionList.LeadingVisual>
                  Dark Mode
                  {!lightSelected && 
                    <ActionList.TrailingVisual>
                      <CheckIcon className='color-fg-success' />
                    </ActionList.TrailingVisual>
                  }
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
       {/* <Text id='toggle' fontWeight='bold' fontSize={1}>Dark Mode</Text>
      <ToggleSwitch size='medium' aria-labelledby='toggle' onChange={(isChecked) => handleToggle(isChecked)} /> */}
    </HeaderWrapper>
  )
}

export default FixedHeader;