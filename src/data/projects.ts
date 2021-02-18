import { Project } from '@/types/types';
import {
  budgetTracker as btImages,
  pandemicTrackerBot as ptbImages,
  recursiveFunction as rfImages,
} from './images';

const budgetTracker: Project = {
  address: 'https://px-budget-tracker.netlify.app',
  deviceType: 'tablet',
  images: btImages,
  keywords: ['Web', 'PWA'],
  title: 'Budget Tracker',
};

const pandemicTrackerBot: Project = {
  address: `https://github.com/pxmarkoff/pandemic-tracker-bot`,
  deviceType: 'tablet',
  images: ptbImages,
  keywords: ['Bot'],
  title: 'Pandemic Tracker Bot',
};

const recursiveFunction: Project = {
  address: 'https://px-recursive-function.netlify.app',
  deviceType: 'tablet',
  images: rfImages,
  keywords: ['Web'],
  title: 'Recursive Function',
};

export default [
  budgetTracker,
  pandemicTrackerBot,
  recursiveFunction,
] as Project[];
