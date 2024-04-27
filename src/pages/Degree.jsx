import React, { useState } from 'react';
import { Text, Heading, Label, LabelGroup, Link, useColorSchemeVar, ActionMenu,
         Box, ActionList, Octicon,
       } from '@primer/react';
import { DataTable } from '@primer/react/drafts';
import { Table } from '@primer/react/drafts';
import { ChevronRightIcon } from '@primer/octicons-react';
import styled from 'styled-components';
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

const data = [
  {
    id: 1,
    name: 'PhD',
    length: '3-7 years',
    workload: 'Extensive, original research',
    funding: 'Often fully funded'
  },
  {
    id: 2,
    name: 'MBA',
    length: '1-2 years',
    workload: 'Specialized course work',
    funding: 'Funding is limited'
  },
  {
    id: 3,
    name: 'MScR',
    length: '1-3 years',
    workload: 'Original research',
    funding: 'Funding is limited'
  }
]

function Degree() {
  const captionColor = useColorSchemeVar({
    light: '#596069',   
    dark: '#8d949d',
  });

  return (
    <>
      <SectionIntroWrapper>
        {/* <ActionGroup>
          <LabelGroup>
            <Label size='large' variant='secondary'>Optional</Label>
          </LabelGroup>
          <PageStatusMenu pageRef={'/choose-degree'} />
        </ActionGroup> */}
        <Heading>Choose Your Degree</Heading>
        <Caption color={captionColor}>
          Before diving into the grad school application process, it's important to pause and 
          think about your goals. What do you hope to achieve through graduate studies? Is it 
          advancing your existing career, exploring research, or pivoting completely?
        </Caption>
        <Link sx={{cursor: 'pointer'}}>I already know my degree. Skip<ChevronRightIcon /></Link>
      </SectionIntroWrapper>
        {/* <Table.Container>
          <Table.Title as="h2" id="degrees">
            Degree Options
          </Table.Title>
          <DataTable 
            data={data} 
            columns={[
              {
                header: 'Type',
                field: 'name',
                rowHeader: true,
              },
              {
                header: 'Length',
                field: 'length',
                rowHeader: false,
              },
              {
                header: 'Workload',
                field: 'workload',
                rowHeader: false,
              },
              {
                header: 'Funding',
                field: 'funding',
                rowHeader: false,
              },
            ]}
          />
        </Table.Container> */}
    </>
  )
}

export default Degree;