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

function PrepareMaterials() {
  const captionColor = useColorSchemeVar({
    light: '#596069',   
    dark: '#8d949d',
  });

  return (
    <>
        <SectionIntroWrapper>
        <Heading>Prepare Your Materials</Heading>
        <Caption color={captionColor}>
          Most universities will ask for a resume or curriculum vitae, transcripts, and 
          work samples. It's also good practice to share these with your rec letter writers.
        </Caption>
      </SectionIntroWrapper>
    </>
  )
}

export default PrepareMaterials;