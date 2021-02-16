import { Project } from '@/types/types';

export interface Props {
  filterSelected: string;
}

export interface PropsUI extends Pick<Props, 'filterSelected'> {
  filteredProjects: Project[];
}

export type StateProps = Pick<Props, 'filterSelected'>;
