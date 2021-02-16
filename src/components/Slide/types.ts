import { Project } from '@/types/types';

export interface Props extends Project {
  currentPos: number;
  index: number;
}

export interface PropsUI {
  isAnimation: boolean;
  project: Project;
}

export type OwnProps = Pick<
  Props,
  'address' | 'deviceType' | 'images' | 'index' | 'title'
>;

export type StateProps = Pick<Props, 'currentPos'>;
