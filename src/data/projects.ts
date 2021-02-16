import { Project } from '@/types/types';
import {
  budgetTracker as btImages,
  pandemicTrackerBot as ptbImages,
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

export default [budgetTracker, pandemicTrackerBot] as Project[];
