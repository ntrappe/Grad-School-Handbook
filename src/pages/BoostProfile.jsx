import { Text, Heading, LabelGroup, Label, Octicon, Breadcrumbs } from '@primer/react';
import styled from 'styled-components';
import { useColorSchemeVar } from '@primer/react';
import { useState } from 'react';
import PageStatusMenu from '../components/PageStatusMenu';

const SectionIntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  gap: 0.75rem;
`;

const ActionGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Caption = styled(Text)`
  font-size: 1.25rem;
  line-height: 1.5;
  font-weight: 300;
  color: ${props => props.color};
`;

function BoostProfile() {
  const captionColor = useColorSchemeVar({
    light: '#596069',   
    dark: '#8d949d',
  });

  return (
    <>
      <SectionIntroWrapper>
        <Breadcrumbs>
          <Breadcrumbs.Item className='color-fg-sponsors'>Preparation</Breadcrumbs.Item>
          <Breadcrumbs.Item selected>Boost Profile</Breadcrumbs.Item>
        </Breadcrumbs>
        <h1 className='color-fg-overlay'>Boost Profile</h1>
        <Caption color={captionColor}>
          Suggestions on how bulk up your experience by enrolling in classes, taking on 
          projects, presenting talks, or attending workshops.
        </Caption>
      </SectionIntroWrapper>
    </>
  )
}

export default BoostProfile;