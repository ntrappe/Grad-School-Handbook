import React, { useState } from 'react';
import { ActionMenu, ActionList, Box, Octicon } from '@primer/react';
import { ChevronRightIcon, IssueDraftIcon, IssueClosedIcon, IssueReopenedIcon, SkipIcon,
         XCircleIcon,
       } from '@primer/octicons-react';
import { statusLabels } from '../lib/constants';


const setDefaultStatus = (pageRef) => {
  const status = window.localStorage.getItem(pageRef);
  if (!status) {
    console.log('No status saved for page @PageStatusMenu: ', pageRef);
    window.localStorage.setItem(pageRef, '0');    // Setting 'Not Started' as default
    return 0;
  } else {
    // console.log('Retrieved status ', status, ' for page ', pageRef);
    return Number(status);        // Num saved as string so convert to int as index
  }
}

function PageStatusMenu({ pageRef }) {
  const [selectedIndex, setSelectedIndex] = React.useState(setDefaultStatus(pageRef));
  const selectedType = statusLabels[selectedIndex];

  const handleSelect = (index) => {
    setSelectedIndex(index);    // Update for status button display text
    window.localStorage.setItem(pageRef, index);    // Save so can fetch on re-render
    window.dispatchEvent(new CustomEvent('update status' + pageRef, {
      bubbles: true,
      composed: true,
      detail: { status: () => index },   // Only way we pass synchronized info
    }));
    
  }

  const getStatusIcon = (index) => {
    switch (index) {
      case 0:
        return <Octicon icon={IssueDraftIcon} className='color-fg-muted' />
      case 1:
        return <Octicon icon={IssueReopenedIcon} className='color-fg-accent' />
      case 2:
        return <Octicon icon={IssueClosedIcon} className='color-fg-done' />
      case 3:
        return <Octicon icon={SkipIcon} className='color-fg-attention' />
      case 4:
        return <Octicon icon={XCircleIcon} className='color-fg-severe' />
    }
  }

  return (
    <ActionMenu>
      <ActionMenu.Button>
        <Box sx={{color: 'fg.muted', display: 'inline-block'}}>Status:</Box>{' '}
        {selectedType.name}
      </ActionMenu.Button>
      <ActionMenu.Overlay width='auto'>
        <ActionList selectionVariant='single'>
          {statusLabels.map((options, index) => (
            <ActionList.Item 
              key={index} 
              selected={index === selectedIndex}
              onSelect={() => handleSelect(index)}
            >
              {options.name}
              <ActionList.TrailingVisual>
                {getStatusIcon(index)}
              </ActionList.TrailingVisual>
            </ActionList.Item>
          ))}
        </ActionList>
      </ActionMenu.Overlay>
    </ActionMenu>
  )
}

export default PageStatusMenu;