import React, { useState, useEffect } from 'react';
import { NavList } from '@primer/react';
/* Icons from https://primer.style/foundations/icons */
import { MegaphoneIcon, PasteIcon, CodeOfConductIcon, SunIcon, UnverifiedIcon, TableIcon,
         ProjectRoadmapIcon, MentionIcon,
       } from '@primer/octicons-react';
import { LandingPage, PreparationPages, ApplicationPages } from '../lib/constants';
import { renderStatusIcon, renderPageIcon, fetchAllPageStatuses } from '../lib/helpers';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

// const LinkW = styled(Link)`
//   display: flex;
//   text-decoration: none;
//   color: inherit;

//   &:hover {
//     text-decoration: none;
//   }
// `;

function MenuList() {
  const location = useLocation();

  const [currentPage, setCurrentPage] = useState(location.pathname);
  const [statusIdx, setStatusIdx] = useState(fetchAllPageStatuses());

  useEffect(() => {
    console.log('currentPage: ' + currentPage);
  }, [currentPage]);

  useEffect(() => {
    PreparationPages.forEach((page) => {
      window.addEventListener('update status' + page.ref, (event) => {
        const nextIdx = statusIdx.map((s, i) => {
          if (i === page.pos) {
            return event.detail.status();
          } else {
            return s;
          }
        });
        setStatusIdx(nextIdx);
      });
    });
  });

  const isPageSelected = (ref) => {
    if (location.pathname === ref) {
      return 'page';
    } else {
      return 'false';
    }
  }

  return (
    <NavList>
      <NavList.Item 
        href={'/'}
        aria-current={isPageSelected('/')}>
        <NavList.LeadingVisual>
          {renderPageIcon(LandingPage[0].pos)}
        </NavList.LeadingVisual>
          {LandingPage[0].name}
      </NavList.Item>
      <NavList.Group title='Preparation'>
        {PreparationPages.map((page, index) => (
          <NavList.Item 
            key={index} 
            href={'/#' + page.ref}
            aria-current={isPageSelected(page.ref)}>
            <NavList.LeadingVisual>
              {renderPageIcon(page.pos)}
            </NavList.LeadingVisual>
            {page.name}
          </NavList.Item>
        ))}
      </NavList.Group>
      <NavList.Group title='Application'>
        {ApplicationPages.map((page, index) => (
          <NavList.Item 
            key={index}
            href={'/#' + page.ref} 
            aria-current={isPageSelected(page.ref)}
          >
            <NavList.LeadingVisual>
              {/* Using page pos => icon mapping to render icon */}
              {renderPageIcon(page.pos)}
            </NavList.LeadingVisual>
            {page.name}
            {/* Using page pos => status mapping to render icon */}
            {/* <NavList.TrailingVisual>
              {renderStatusIcon(statusIdx[page.pos])}
            </NavList.TrailingVisual> */}
          </NavList.Item>
        ))}
      </NavList.Group>
      <NavList.Group title="Post-Application">
        <NavList.Item 
            href="/prep-interviews"
            aria-current={currentPage === "/prep-interviews" ? 'page' : 'false'}>
          <NavList.LeadingVisual>
            <MegaphoneIcon />
          </NavList.LeadingVisual>
          Prepare for Interviews
        </NavList.Item>
        <NavList.Item 
            href="/decision"
            aria-current={currentPage === "/decision" ? 'page' : 'false'}>
          <NavList.LeadingVisual>
            <UnverifiedIcon />
          </NavList.LeadingVisual>
          Receive the Decision
        </NavList.Item>
        <NavList.Item href="/thanks"
            aria-current={currentPage === "/thanks" ? 'page' : 'false'}>
          <NavList.LeadingVisual>
            <CodeOfConductIcon />
          </NavList.LeadingVisual>
          Send Thanks
        </NavList.Item>
      </NavList.Group>
      <NavList.Group title="Examples">
        <NavList.Item 
            href="/personal-statements"
            aria-current={currentPage === "/personal-statements" ? 'page' : 'false'}>
          <NavList.LeadingVisual>
            <ProjectRoadmapIcon />
          </NavList.LeadingVisual>
          Personal Statements
        </NavList.Item>
        <NavList.Item 
            href="/research-proposals"
            aria-current={currentPage === "/research-proposals" ? 'page' : 'false'}>
          <NavList.LeadingVisual>
            <PasteIcon />
          </NavList.LeadingVisual>
          Research Proposals
        </NavList.Item>
        <NavList.Item 
            href="/cv"
            aria-current={currentPage === "/cv" ? 'page' : 'false'}>
          <NavList.LeadingVisual>
            <TableIcon />
          </NavList.LeadingVisual>
          Curriculumn Vitae
        </NavList.Item>
        <NavList.Item 
            href="/emails"
            aria-current={currentPage === "/emails" ? 'page' : 'false'}>
          <NavList.LeadingVisual>
            <MentionIcon />
          </NavList.LeadingVisual>
          Emails & Messages
        </NavList.Item>
      </NavList.Group>
      <NavList.Group title="Tips & Tricks">
        <NavList.Item 
            href="/habits"
            aria-current={currentPage === "/habits" ? 'page' : 'false'}>
          <NavList.LeadingVisual>
            <SunIcon />
          </NavList.LeadingVisual>
          Build Good Habits
        </NavList.Item>
      </NavList.Group>
    </NavList>
  )
}

export default MenuList;