import { Project } from '@/types/types';
import { budgetTracker as btImages } from './images';

const budgetTracker: Project = {
  address: 'https://px-budget-tracker.netlify.app',
  deviceType: 'tablet',
  images: btImages,
  title: 'Budget Tracker',
};

export default [budgetTracker] as Project[];
