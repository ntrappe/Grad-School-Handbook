import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { themeGet, Octicon, IconButton, SplitPageLayout, Text } from '@primer/react';
import { XIcon } from '@primer/octicons-react';
import { useColorSchemeVar } from '@primer/react';
import MenuList from './MenuList';

const MenuWrapper = styled.div`
  position: fixed;
  height: 100%;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 60; 
  // background-color: ${themeGet('colors.canvas.default')};
  background-color: red;
`;

const MenuHeader = styled.div`
  display: flex;
  flex-direction: row;
  // height: 3em;
  padding: 12px 20px;
  justify-content: space-between;
  align-items: center;
  border: 1px solid;
  border-color: ${props => props.borderColor};
  background-color: ${props => props.bg};
`;


function MobileMenu() {
  const customBackground = useColorSchemeVar({
    light: '#F6F8FA',   
    dark: '#020408',
  });

  const customBorder = useColorSchemeVar({
    light: '#D1D7DD',
    dark: '#31363C',
  });

  return (
    <MenuWrapper id="mobile-menu-wrapper">
      <MenuHeader bg={customBackground} borderColor={customBorder}>
        <Text fontWeight='bold' fontSize={2}>Navigation & Settings</Text>
        <IconButton 
          icon={XIcon}
          onClick={() => window.dispatchEvent(new Event('close menu'))}
        ></IconButton>
      </MenuHeader>
      <SplitPageLayout>
        <SplitPageLayout.Content position='start' hidden={{ regular: true }}>
          <MenuList/>
        </SplitPageLayout.Content>
      </SplitPageLayout>
    </MenuWrapper>
  )

}

export default MobileMenu;