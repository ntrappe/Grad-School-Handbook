import { Octicon, Spinner } from '@primer/react';
import { HomeIcon, MailIcon, FileDirectoryIcon, MortarBoardIcon, LogIcon, PeopleIcon,
         MegaphoneIcon, ReadIcon, PasteIcon, CodeOfConductIcon, CalendarIcon, SunIcon,
         UnverifiedIcon, ProjectRoadmapIcon, PencilIcon, PlusCircleIcon, TableIcon,
         CommentDiscussionIcon, MentionIcon, ChevronRightIcon, IssueDraftIcon, 
         IssueClosedIcon, IssueReopenedIcon, SkipIcon, XCircleIcon, DashIcon,
         ThumbsdownIcon,
       } from '@primer/octicons-react';
import { STATUS_NOT_STARTED, STATUS_IN_PROGRESS, STATUS_COMPLETED, STATUS_SKIPPED, 
         STATUS_ABANDONED, LandingPage, PreparationPages, ApplicationPages, LIGHT_THEME,
         DARK_THEME, SET_DARK_EVENT, SET_LIGHT_EVENT, OPEN_MENU_EVENT, STORAGE_THEME,
         BODY_THEME, SHOW_PROGRESS_EVENT, HIDE_PROGRESS_EVENT, STORAGE_PROGESS_VISIBILITY,
         STATUS_HIDDEN,
       } from './constants';

/**
 * Return the icon associated with the status (number: 0-4)
 * @param {Number} status Single digit representing the status 
 * @returns 
 */
export const renderStatusIcon = (status) => {
  switch (status) {
    case STATUS_NOT_STARTED:
      return <Octicon icon={IssueDraftIcon} className='color-fg-muted' />;
    case STATUS_IN_PROGRESS:
      return <Octicon icon={IssueReopenedIcon} className='color-fg-accent' />;
    case STATUS_COMPLETED:
      return <Octicon icon={IssueClosedIcon} className='color-fg-done' />;
    case STATUS_SKIPPED:
      return <Octicon icon={SkipIcon} className='color-fg-attention' />;
    case STATUS_ABANDONED:
      return <Octicon icon={XCircleIcon} className='color-fg-severe' />;
    default:
      return <Spinner size='small' />;
  }
};

/**
 * Returns the icon that corresponds to each page. Uses the position (pos) to map each
 * page (via pos) to an icon. If no icon found, use spinner as placeholder.
 * @param {Number} pos Represents position of a page in list of all pages
 * @returns Icon
 */
export const renderPageIcon = (pos) => {
  switch (pos) {
    case 0:
      return <HomeIcon />;
    case 1:
      return <LogIcon />;
    case 2:
      return <PlusCircleIcon />;
    case 3:
      return <PeopleIcon />;
    case 4:
      return <MortarBoardIcon />;
    case 5:
      return <CommentDiscussionIcon />;
    case 6:
      return <MailIcon />;
    case 7:
      return <CalendarIcon />;
    case 8:
      return <FileDirectoryIcon />;
    case 9:
      return <ReadIcon />;
    case 10:
      return <PencilIcon />;
    default:
      return null;
  }
};

/**
 * Returns an array of each status of a page represented by the status index (Number).
 * Helpful when rendering the MenuList because we need to fetch last saved statuses.
 * Uses local storage, fetches eachs status by querying the 'ref' for a page.
 * @returns 
 */
export const fetchAllPageStatuses = () => {
  let statusArr = [];

  LandingPage.forEach((page) => {
    statusArr.push(-1);
  });

  PreparationPages.forEach((page) => {
    // Fetch a status for a page given a ref (e.g., '/choose-degree)
    // Then convert to number because local storage stringifies them
    const storedStatus = Number(window.localStorage.getItem(page.ref));
    statusArr.push(storedStatus);
  });

   ApplicationPages.forEach((page) => {
    const storedStatus = Number(window.localStorage.getItem(page.ref));
    statusArr.push(storedStatus);
  });

  return statusArr;
}

 /**
 * Once user has selected an option, fire off event to update system colors. Used by both
 * header and mobile menu.
 * @param {String} scheme Name of color data mode
 */
export const handleColorSelect = (scheme) => {
  if (scheme === LIGHT_THEME) {
    window.dispatchEvent(new Event(SET_LIGHT_EVENT));
  } else if (scheme === DARK_THEME) {
    window.dispatchEvent(new Event(SET_DARK_EVENT));
  } else {
    console.warn('Invalid color scheme @FixedHeader: ', scheme);
  }
}

/**
 * When a toggle switch is turned on or off, fire off event notifying sustem if change
 * in color scheme selection.
 * @param {Boolean} on True -- dark mode, false -- light mode (default)
 */
export const handleColorToggle = (on) => {
  if (on) {
    window.dispatchEvent(new Event(SET_DARK_EVENT));
  } else {
    window.dispatchEvent(new Event(SET_LIGHT_EVENT));
  }
}

/**
 * Utility function to set the color scheme of the app on load
 * @returns string Name of data color scheme
 */
export const setDefaultColorScheme = () => {
  const body = document.getElementById('body');
  const currScheme = window.localStorage.getItem(STORAGE_THEME);
  if (currScheme) {
    console.log('Using existing color scheme: ', currScheme);
    body.setAttribute(BODY_THEME, currScheme);
    return currScheme;
  } else {
    console.log('No existing color scheme, default to day');
    window.localStorage.setItem(STORAGE_THEME, LIGHT_THEME);
    body.setAttribute(BODY_THEME, LIGHT_THEME);
    return LIGHT_THEME;
  }
}

export const getProgressVisibility = () => {
  const progress = window.localStorage.getItem(STORAGE_PROGESS_VISIBILITY);

  if (progress) {
    return progress;
  } else {
    // By default, progress is hidden so save that as first value
    window.localStorage.setItem(STORAGE_PROGESS_VISIBILITY, STATUS_HIDDEN);
    return STATUS_HIDDEN;
  }
}