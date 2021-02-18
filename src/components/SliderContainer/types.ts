import { Project } from '@/types/types';

export interface Props {
  filterSelected: string;
  setEndPos: (value: number) => void;
}

export interface PropsUI extends Pick<Props, 'filterSelected'> {
  filteredProjects: Project[];
}

export type StateProps = Pick<Props, 'filterSelected'>;

export type DispatchProps = Pick<Props, 'setEndPos'>;
