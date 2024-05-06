import { Text, Heading, LabelGroup, Label, Octicon } from '@primer/react';
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
  font-size: 1rem;
  font-weight: 400;
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
        {/* <ActionGroup>
          <LabelGroup>
            <Label size='large' variant='warning'>Important</Label>
          </LabelGroup>
          <PageStatusMenu pageRef={'/boost-profile'} />
        </ActionGroup> */}
        <Heading>Build Your Team</Heading>
        <Caption color={captionColor}>
          It's essential to gather a group of people who can support, coach, and help you with 
          your application. This can range from friends, faculty, supervisors, and family.
        </Caption>
      </SectionIntroWrapper>
    </>
  )
}

export default BoostProfile;