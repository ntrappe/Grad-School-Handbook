import React, { useState, useEffect } from 'react';
import { ThemeProvider, BaseStyles, useTheme, Octicon, IconButton, Text, Heading,
         ToggleSwitch,
       } from '@primer/react';
import { FeedTrophyIcon, ThreeBarsIcon } from '@primer/octicons-react';

function FixedHeader() {
  const { theme } = useTheme();   // retrieve theme passed down from parent

  const handleToggle = (isChecked) => {
    if (isChecked) {
      console.log('SET TO NIGHT');
      window.dispatchEvent(new Event('set night'));
    } else {
      console.log('SET TO DAY');
      window.dispatchEvent(new Event('set day'));
    }
  }

  return (
    <BaseStyles>
      <Text id='toggle' fontWeight='bold' fontSize={1}>Dark Mode</Text>
      <ToggleSwitch aria-labelledby='toggle' onChange={(isChecked) => handleToggle(isChecked)} />
    </BaseStyles>
  )
}

export default FixedHeader;