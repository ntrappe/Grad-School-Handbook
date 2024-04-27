/* ----------- Constants for task status options ----------- */
export const STATUS_NOT_STARTED = 0;
export const STATUS_IN_PROGRESS = 1;
export const STATUS_COMPLETED = 2;
export const STATUS_SKIPPED = 3;
export const STATUS_ABANDONED = 4;

export const statusLabels = [
  {
    name: 'Not Started',
  },
  {
    name: 'In Progress',
  },
  {
    name: 'Completed',
  },
  {
    name: 'Skipped',
  },
  {
    name: 'Abandoned',
  },
];
/* --------- End Constants for task status options --------- */

/* ----------- Constants for all the unique events --------- */
export const EVENT_STATUS_CHANGE = 'status';
export const SET_DARK_EVENT = 'set night';
export const SET_LIGHT_EVENT = 'set day';
export const OPEN_MENU_EVENT = 'open menu';
export const CLOSE_MENU_EVENT = 'close menu';
/* -------- End Constants for all the unique events -------- */

/* ----------- Constants for all the pages on site ----------- */
export const LandingPage = [
  {
    pos: 0,
    name: 'Getting Started',
    ref: '/',
  },
];

export const PreparationPages = [
  {
    pos: 1,
    name: 'Choose Your Degree',
    ref: '/choose-degree',
  },
  {
    pos: 2,
    name: 'Boost Your Profile',
    ref: '/boost-profile',
  },
  {
    pos: 3,
    name: 'Build Your Team',
    ref: '/build-team',
  },
  {
    pos: 4,
    name: 'Select Your Schools',
    ref: '/select-schools',
  },
  {
    pos: 5,
    name: 'Interview Students',
    ref: '/interview-students',
  },
  {
    pos: 6,
    name: 'Contact Potential Supervisors',
    ref: '/contact-supervisors',
  },
];

export const ApplicationPages = [
  {
    pos: 7,
    name: 'Make Your Plan',
    ref: '/make-plan',
  },
  {
    pos: 8,
    name: 'Prepare Your Materials',
    ref: '/prepare-materials',
  },
  {
    pos: 9,
    name: 'Letters of Recommendation',
    ref: '/letters-of-rec',
  }, 
  {
    pos: 10,
    name: 'Write Your Statements',
    ref: '/write-statements',
  }, 
];
/* --------- End Constants for all the pages on site --------- */

/* ------------ Constants for aesthetics (schemes) ----------- */
export const LIGHT_THEME = 'day';
export const DARK_THEME = 'night';
export const STORAGE_THEME = 'data-color-scheme';
export const BODY_THEME = 'data-color-mode';

/* --------------- End Constants for aesthetics -------------- */