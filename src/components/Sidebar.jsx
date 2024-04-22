import {ThemeProvider, BaseStyles, NavList, Heading} from '@primer/react';
import React, { useState, useEffect } from 'react';
/* Icons from https://primer.style/foundations/icons */
import { HomeIcon, MailIcon, FileDirectoryIcon, MortarBoardIcon,
         LogIcon, PeopleIcon, MegaphoneIcon, GoalIcon, ReadIcon,
         ThumbsupIcon, CodeOfConductIcon, PasteIcon, CalendarIcon,
         UnverifiedIcon, ProjectRoadmapIcon, PencilIcon, SunIcon,
         PlusCircleIcon, TableIcon, CommentDiscussionIcon, MentionIcon,
       } from '@primer/octicons-react';

function Sidebar() {
  const [pageRef, setPageRef] = useState(window.location.pathname);

  /* Listen for changes in url and save new href */
  useEffect(() => {
    window.addEventListener('popstate', () => setPageRef(window.location.pathname));
  });

  return (
    <ThemeProvider>
      <BaseStyles>
        <NavList>
          <NavList.Item 
              href="/" 
              aria-current={pageRef === "/" ? 'page' : 'false'}>
            <NavList.LeadingVisual>
              <HomeIcon />
            </NavList.LeadingVisual>
            Getting Started
          </NavList.Item>
          <NavList.Group title="Preparation">
            <NavList.Item 
                href="/degree"  
                aria-current={pageRef === "/degree" ? 'page' : 'false'}>
              <NavList.LeadingVisual>
                <LogIcon />
              </NavList.LeadingVisual>
              Choose Your Degree
            </NavList.Item>
            <NavList.Item 
                href="/area"
                aria-current={pageRef === "/area" ? 'page' : 'false'}>
              <NavList.LeadingVisual>
                <GoalIcon />
              </NavList.LeadingVisual>
              Identify Your Area
            </NavList.Item>
            <NavList.Item 
                href="/growth"
                aria-current={pageRef === "/growth" ? 'page' : 'false'}>
              <NavList.LeadingVisual>
                <PlusCircleIcon />
              </NavList.LeadingVisual>
              Grow Your Experience
            </NavList.Item>
            <NavList.Item 
                href="/team"
                aria-current={pageRef === "/team" ? 'page' : 'false'}>
              <NavList.LeadingVisual>
                <PeopleIcon />
              </NavList.LeadingVisual>
              Build Your Team
            </NavList.Item>
            <NavList.Item 
                href="/school"
                aria-current={pageRef === "/school" ? 'page' : 'false'}>
              <NavList.LeadingVisual>
                <MortarBoardIcon />
              </NavList.LeadingVisual>
              Select Schools
            </NavList.Item>
            <NavList.Item 
                href="/interview-students"
                aria-current={pageRef === "/interview-students" ? 'page' : 'false'}>
              <NavList.LeadingVisual>
                <CommentDiscussionIcon />
              </NavList.LeadingVisual>
              Interview Students
            </NavList.Item>
            <NavList.Item 
                href="/contact-supervisors"
                aria-current={pageRef === "/contact-supervisors" ? 'page' : 'false'}>
              <NavList.LeadingVisual>
                <MailIcon />
              </NavList.LeadingVisual>
              Contact Supervisors
            </NavList.Item>
          </NavList.Group>
          <NavList.Group title="Application">
            <NavList.Item
                href="/plan"
                aria-current={pageRef === "/plan" ? 'page' : 'false'}>
              <NavList.LeadingVisual>
                <CalendarIcon />
              </NavList.LeadingVisual>
              Make a Plan
            </NavList.Item>
            <NavList.Item 
                href="/materials"
                aria-current={pageRef === "/materials" ? 'page' : 'false'}>
              <NavList.LeadingVisual>
                <FileDirectoryIcon />
              </NavList.LeadingVisual>
              Prepare Materials
            </NavList.Item>
            <NavList.Item 
                href="/letters"
                aria-current={pageRef === "/letters" ? 'page' : 'false'}>
              <NavList.LeadingVisual>
                <ReadIcon />
              </NavList.LeadingVisual>
              Letters of Recommendation
            </NavList.Item>
            <NavList.Item 
                href="/essays"
                aria-current={pageRef === "/essays" ? 'page' : 'false'}>
              <NavList.LeadingVisual>
                <PencilIcon />
              </NavList.LeadingVisual>
              Write Statements
            </NavList.Item>
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
      </BaseStyles>
    </ThemeProvider>
  )
}

export default Sidebar;