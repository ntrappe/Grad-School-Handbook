import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { BaseStyles, useTheme, Octicon, IconButton, Text, ActionMenu, ActionList,
         ToggleSwitch,
       } from '@primer/react';
import { FeedTrophyIcon, ThreeBarsIcon, MoonIcon, SunIcon, CheckIcon,
       } from '@primer/octicons-react';
import { useColorSchemeVar } from '@primer/react';
import { Hidden } from '@primer/react/drafts';

const HeaderWrapper = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.borderColor};
  background-color: ${props => props.bg};
  padding: 12px 20px;
  justify-content: space-between;
  align-items: center;
  z-index: 50;
`;

const ActionGroup = styled.div`
  display: flex;
`;

const HeaderLink = styled.a`
  display: flex;
  cursor: pointer;
  height: fit-content;
  width: fit-content;
  align-items: center;

  svg {
    margin-bottom: 0;
    margin-right: 10px;
  }
`;


function FixedHeader() {
  const [lightOn, setLightOn] = useState(true);
  const { theme } = useTheme();   // retrieve theme passed down from parent

  /* Replace with colors.light from @primer/primitives when works */
  const customBackground = useColorSchemeVar({
    light: '#F6F8FA',   
    dark: '#020408',
  });

  const customBorder = useColorSchemeVar({
    light: '#D1D7DD',
    dark: '#31363C',
  });

  const customCheckFill = useColorSchemeVar({
    light: '#178450',
    dark: '#17BE51',
  })

  // const handleToggle = (isChecked) => {
  //   if (isChecked) {
  //     console.log('SET TO NIGHT');
  //     window.dispatchEvent(new Event('set night'));
  //   } else {
  //     console.log('SET TO DAY');
  //     window.dispatchEvent(new Event('set day'));
  //   }
  // }


  const handleColorSelect = (mode) => {
    if (mode === 'day') {
      window.dispatchEvent(new Event('set day'));
      setLightOn(true);
    } else {
      window.dispatchEvent(new Event('set night'));
      setLightOn(false);
    }
  }

  return (
    <HeaderWrapper bg={customBackground} borderColor={customBorder}>
      <HeaderLink>
        <Octicon icon={FeedTrophyIcon} size={20} aria-label='trophy-icon'/>
        <Text fontWeight='bold' fontSize={2}>Grad School Handbook</Text>
      </HeaderLink>
      <ActionGroup id='action-group'>
        <Hidden when={['narrow']}>
          <ActionMenu id='action-menu'>
            <ActionMenu.Button>Color Mode</ActionMenu.Button>
            <ActionMenu.Overlay id='action-overlay' width='small'>
              <ActionList>
                <ActionList.Item onSelect={() => handleColorSelect('day')}>
                  <ActionList.LeadingVisual>
                    <SunIcon />
                  </ActionList.LeadingVisual>
                  Light Mode
                  {lightOn && 
                    <ActionList.TrailingVisual>
                      <CheckIcon fill={customCheckFill} />
                    </ActionList.TrailingVisual>
                  }
                </ActionList.Item>
                <ActionList.Item onSelect={() => handleColorSelect('night')}>
                  <ActionList.LeadingVisual>
                    <MoonIcon />
                  </ActionList.LeadingVisual>
                  Dark Mode
                  {!lightOn && 
                    <ActionList.TrailingVisual>
                      <CheckIcon fill={customCheckFill} />
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
            aria-labelledby='open menu' 
            onClick={() => window.dispatchEvent(new Event('open menu'))}
            sx={{marginLeft: '10px'}}
          ></IconButton>
        </Hidden>
      </ActionGroup>
       {/* <Text id='toggle' fontWeight='bold' fontSize={1}>Dark Mode</Text>
      <ToggleSwitch size='medium' aria-labelledby='toggle' onChange={(isChecked) => handleToggle(isChecked)} /> */}
    </HeaderWrapper>
  )
}

export default FixedHeader;