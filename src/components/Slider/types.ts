export interface Props {
  currentPos: number;
  slideHeight: number;
}

export interface PropsUI extends Pick<Props, 'currentPos' | 'slideHeight'> {}

export type StateProps = Pick<Props, 'currentPos' | 'slideHeight'>;
