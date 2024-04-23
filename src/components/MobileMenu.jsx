import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { useTheme, themeGet, Octicon, ToggleSwitch, IconButton, Box,
         SplitPageLayout, Text 
       } from '@primer/react';
import { XIcon } from '@primer/octicons-react';
import { useColorSchemeVar } from '@primer/react';
import MenuList from './MenuList';

const MenuWrapper = styled.div`
  width: 100%:
  height: 100%;
  z-index: 55; 
  background-color: ${themeGet('colors.canvas.default')};
`;

const MenuHeader = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 60; 
  display: flex;
  flex-direction: row;
  padding: 12px 20px;
  justify-content: space-between;
  align-items: center;
  border: 1px solid;
  border-color: ${props => props.borderColor};
  background-color: ${props => props.bg};
`;

const BoxStyled = styled(Box)`
  display: flex;
  align-items: start;
  border-top: 2.5px solid;
  border-color: ${props => props.borderColor};
  margin-top: 5px;
  padding: 20px 15px;
  margin-bottom: 10px;
`;

function MobileMenu() {
  const { theme, colorMode } = useTheme();   // retrieve theme passed down from parent
  const [lightOn, setLightOn] = useState(colorMode === 'day');

  const customBackground = useColorSchemeVar({
    light: '#F6F8FA',   
    dark: '#020408',
  });

  const customBorder = useColorSchemeVar({
    light: '#D1D7DD',
    dark: '#31363C',
  });

  const handleColorSelect = (on) => {
    if (on) {
      window.dispatchEvent(new Event('set night'));
    } else {
      window.dispatchEvent(new Event('set day'));
    }
  }

  useEffect(() => {
    window.addEventListener('set night', () => setLightOn(false));
    window.addEventListener('set day', () => setLightOn(true));
  }, [lightOn]);

  return (
    <MenuWrapper id="mobile-menu-wrapper">
      <MenuHeader bg={customBackground} borderColor={customBorder}>
        <Text fontWeight='bold' fontSize={2}>Navigation & Settings</Text>
        <IconButton 
          icon={XIcon}
          onClick={() => window.dispatchEvent(new Event('close menu'))}
        ></IconButton>
      </MenuHeader>
      <SplitPageLayout sx={{marginTop: '3.2em'}}>
        <SplitPageLayout.Content position='start' hidden={{ regular: true }}>
          <MenuList/>
          <BoxStyled borderColor={customBorder}>
            <Box flexGrow={1}>
              <Text fontSize={2} fontWeight='bold' id='dark-mode-switch' display='block'>
                Dark Mode
              </Text>
              <Text color="fg.subtle" fontSize={1} display="block">
                Toggle on for dark mode. Off for light mode.
              </Text>
            </Box>
            <ToggleSwitch 
              defaultChecked={!lightOn} 
              aria-labelledby='toggle dark mode on or off'
              onChange={(on) => handleColorSelect(on)}
            />
          </BoxStyled>
        </SplitPageLayout.Content>
      </SplitPageLayout>
    </MenuWrapper>
  )
}

export default MobileMenu;