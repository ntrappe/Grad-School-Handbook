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

function PrepareMaterials() {
  const captionColor = useColorSchemeVar({
    light: '#596069',   
    dark: '#8d949d',
  });

  return (
    <>
      <SectionIntroWrapper>
        <Breadcrumbs>
          <Breadcrumbs.Item className='color-fg-sponsors'>Application</Breadcrumbs.Item>
          <Breadcrumbs.Item selected>Prepare Materials</Breadcrumbs.Item>
        </Breadcrumbs>
        <h1 className='color-fg-overlay'>Prepare Materials</h1>
        <Caption color={captionColor}>
          Universities use resumes/CVs, transcripts, and work samples to assess your preparation,
          readiness, and commitment to the field.
        </Caption>
      </SectionIntroWrapper>
    </>
  )
}

export default PrepareMaterials;