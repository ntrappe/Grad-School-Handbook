import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  gap: 0.75rem;
`;

const StyledHeading = styled.h1`
  font-weight: 600;
  margin-top: 0px;
  font-size: 2.25rem;
  line-height: 1.5;
`;

const StyledSectionHeading = styled.h2`
  margin-bottom: 16px;
  scroll-margin-top: 80px;
  line-height: 1.25;
  padding-bottom: 8px;
  font-size: 24px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: rgb(208, 215, 222);
  font-weight: 500;
`;

const StyledSubheading = styled.h3`
  font-weight: 400;
  font-size: 20px;
  margin-top: 0px;
  margin-bottom: 16px;
  max-width: 60ch;
  line-height: 1.5;
`;

function Page({ children }) {
  return (
    <StyledWrapper>{children}</StyledWrapper>
  )
}

function Heading({ children }) {
  return <StyledHeading>{children}</StyledHeading>
}

function Subheading({ children }) {
  return <StyledSubheading>{children}</StyledSubheading>
}

function Section({ children }) {
  return <section>{children}</section>
}
function SectionHeading({ children }) {
  return <StyledSectionHeading>{children}</StyledSectionHeading>
}

Page.Heading = Heading;
Page.Subheading = Subheading;
Page.Section = Section;
Page.Section.Heading = SectionHeading;

export default Page;