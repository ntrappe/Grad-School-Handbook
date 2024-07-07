import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { useTheme, themeGet, Octicon, ToggleSwitch, IconButton, Box,
         SplitPageLayout, Text 
       } from '@primer/react';
import { XIcon } from '@primer/octicons-react';
import { useColorSchemeVar } from '@primer/react';
import MenuList from './MenuList';
import { handleColorToggle } from '../lib/helpers';
import { LIGHT_THEME, SET_DARK_EVENT, SET_LIGHT_EVENT, CLOSE_MENU_EVENT, MOBILE_HEADER_MENU_GAP,
       } from '../lib/constants';


const MenuWrapper = styled.div`
  background-color: ${themeGet('colors.canvas.default')};
  background-color: orange;
`;

const MenuHeader = styled.div`
  border: 1px solid;
  border-color: ${props => props.borderColor};
  background-color: ${props => props.bg};
  background-color: yellow;
`;

const BoxStyled = styled(Box)`
  border-top: 2.5px solid;
  border-color: ${props => props.borderColor};
  background-color: plum;
`;

function MobileMenu() {
  const { colorMode } = useTheme();   // retrieve theme passed down from parent
  const [lightSelected, setLightSelected] = useState(colorMode === LIGHT_THEME);

  const customBackground = useColorSchemeVar({
    light: '#F6F8FA',   
    dark: '#020408',
  });

  const customBorder = useColorSchemeVar({
    light: '#D1D7DD',
    dark: '#31363C',
  });


  /**
   * When user selects light or dark mode, update which was selected so we can display a check
   * mark against the correct option. (Updates could come from mobile menu or fixed header).
   */
  useEffect(() => {
    window.addEventListener(SET_DARK_EVENT, () => setLightSelected(false));
    window.addEventListener(SET_LIGHT_EVENT, () => setLightSelected(true));
  }, [lightSelected]);

  return (
    <MenuWrapper id='mobile-menu-wrapper'>
      <MenuHeader id='mobile-menu-header' bg={customBackground} borderColor={customBorder}>
        <Text fontWeight='bold' fontSize={2}>Navigation & Settings</Text>
        <IconButton 
          icon={XIcon}
          onClick={() => window.dispatchEvent(new Event(CLOSE_MENU_EVENT))}
        ></IconButton>
      </MenuHeader>
      <SplitPageLayout sx={{marginTop: MOBILE_HEADER_MENU_GAP}}>
        <SplitPageLayout.Content position='start' hidden={{ regular: true }}>
          <MenuList/>
          <BoxStyled id='dark-mode-toggle-box' borderColor={customBorder}>
            <Box flexGrow={1}>
              <Text fontSize={2} fontWeight='bold' id='dark-mode-switch' display='block'>
                Dark Mode
              </Text>
              <Text color='fg.subtle' fontSize={1} display='block'>
                Toggle on for dark mode.
              </Text>
            </Box>
            <ToggleSwitch 
              defaultChecked={!lightSelected} 
              aria-labelledby='toggle dark mode on or off'
              onChange={(on) => handleColorToggle(on)}
            />
          </BoxStyled>
        </SplitPageLayout.Content>
      </SplitPageLayout>
    </MenuWrapper>
  )
}

export default MobileMenu;