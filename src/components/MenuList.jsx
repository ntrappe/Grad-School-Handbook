import { NavList } from '@primer/react';
import React, { useState, useEffect } from 'react';
/* Icons from https://primer.style/foundations/icons */
import { MegaphoneIcon, PasteIcon, CodeOfConductIcon, SunIcon, UnverifiedIcon, TableIcon,
         ProjectRoadmapIcon, MentionIcon,
       } from '@primer/octicons-react';
import { LandingPage, PreparationPages, ApplicationPages, STORAGE_PROGESS_VISIBILITY,
         SHOW_PROGRESS_EVENT, HIDE_PROGRESS_EVENT, STATUS_VISIBLE, STATUS_HIDDEN,
       } from '../lib/constants';
import { renderStatusIcon, renderPageIcon, fetchAllPageStatuses, getProgressVisibility,
       } from '../lib/helpers';

function MenuList() {
  const [pageOrigin, setPageOrigin] = useState(window.location.origin);
  const [pageRef, setPageRef] = useState(window.location.pathname);
  const [statusIdx, setStatusIdx] = useState(fetchAllPageStatuses());
  const [showProgress, setShowProgress] = useState(STATUS_VISIBLE === getProgressVisibility());

  /* Listen for changes in url and save new href */
  useEffect(() => {
    window.addEventListener('popstate', () => setPageRef(window.location.pathname));
    window.addEventListener('popstate', () => setPageOrigin(window.location.origin));
  });

  useEffect(() => {
    window.addEventListener(SHOW_PROGRESS_EVENT, () => setShowProgress(true));
    window.addEventListener(HIDE_PROGRESS_EVENT, () => setShowProgress(false));
  });

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

  return (
    <NavList>
      <NavList.Item
        href={pageOrigin + LandingPage[0].ref}
        aria-current={pageRef === LandingPage[0].ref ? 'page' : 'false'}
      >
        <NavList.LeadingVisual>
          {/* Using page pos => icon mapping to render icon */}
          {renderPageIcon(LandingPage[0].pos)}
        </NavList.LeadingVisual>
        {LandingPage[0].name}
      </NavList.Item>
      <NavList.Group title='Preparation'>
        {PreparationPages.map((page, index) => (
          <NavList.Item 
            key={index}
            href={pageOrigin + page.ref} 
            aria-current={pageRef === page.ref ? 'page' : 'false'}
          >
            <NavList.LeadingVisual>
              {/* Using page pos => icon mapping to render icon */}
              {renderPageIcon(page.pos)}
            </NavList.LeadingVisual>
              {page.name}
            {/* Using page pos => status mapping to render icon */}
            {showProgress &&
              <NavList.TrailingVisual>
                {renderStatusIcon(statusIdx[page.pos])}
              </NavList.TrailingVisual>
            }
          </NavList.Item>
        ))}
      </NavList.Group>
      <NavList.Group title='Application'>
        {ApplicationPages.map((page, index) => (
          <NavList.Item 
            key={index}
            href={pageOrigin + page.ref} 
            aria-current={pageRef === page.ref ? 'page' : 'false'}
          >
            <NavList.LeadingVisual>
              {/* Using page pos => icon mapping to render icon */}
              {renderPageIcon(page.pos)}
            </NavList.LeadingVisual>
              {page.name}
            {/* Using page pos => status mapping to render icon */}
            {showProgress &&
              <NavList.TrailingVisual>
                {renderStatusIcon(statusIdx[page.pos])}
              </NavList.TrailingVisual>
            }
          </NavList.Item>
        ))}
      </NavList.Group>
      <NavList.Group title="Post-Application">
        <NavList.Item 
            href="/prep-interviews"
            aria-current={pageRef === "/prep-interviews" ? 'page' : 'false'}>
          <NavList.LeadingVisual>
            <MegaphoneIcon />
          </NavList.LeadingVisual>
          Prepare for Interviews
        </NavList.Item>
        <NavList.Item 
            href="/decision"
            aria-current={pageRef === "/decision" ? 'page' : 'false'}>
          <NavList.LeadingVisual>
            <UnverifiedIcon />
          </NavList.LeadingVisual>
          Receive the Decision
        </NavList.Item>
        <NavList.Item href="/thanks"
            aria-current={pageRef === "/thanks" ? 'page' : 'false'}>
          <NavList.LeadingVisual>
            <CodeOfConductIcon />
          </NavList.LeadingVisual>
          Send Thanks
        </NavList.Item>
      </NavList.Group>
      <NavList.Group title="Examples">
        <NavList.Item 
            href="/personal-statements"
            aria-current={pageRef === "/personal-statements" ? 'page' : 'false'}>
          <NavList.LeadingVisual>
            <ProjectRoadmapIcon />
          </NavList.LeadingVisual>
          Personal Statements
        </NavList.Item>
        <NavList.Item 
            href="/research-proposals"
            aria-current={pageRef === "/research-proposals" ? 'page' : 'false'}>
          <NavList.LeadingVisual>
            <PasteIcon />
          </NavList.LeadingVisual>
          Research Proposals
        </NavList.Item>
        <NavList.Item 
            href="/cv"
            aria-current={pageRef === "/cv" ? 'page' : 'false'}>
          <NavList.LeadingVisual>
            <TableIcon />
          </NavList.LeadingVisual>
          Curriculumn Vitae
        </NavList.Item>
        <NavList.Item 
            href="/emails"
            aria-current={pageRef === "/emails" ? 'page' : 'false'}>
          <NavList.LeadingVisual>
            <MentionIcon />
          </NavList.LeadingVisual>
          Emails & Messages
        </NavList.Item>
      </NavList.Group>
      <NavList.Group title="Tips & Tricks">
        <NavList.Item 
            href="/habits"
            aria-current={pageRef === "/habits" ? 'page' : 'false'}>
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