import { ThemeProvider, BaseStyles, Heading, Label, LabelGroup } from '@primer/react';
import { DataTable } from '@primer/react/drafts';
import { Table } from '@primer/react/drafts';

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
  return (
    <ThemeProvider>
      <BaseStyles>
        <Heading>Choosing Your Degree</Heading>
        <Table.Container>
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
        </Table.Container>
      </BaseStyles>
    </ThemeProvider>
  )
}

export default Degree;