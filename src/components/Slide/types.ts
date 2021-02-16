export interface Props {
  currentPos: number;
  index: number;
}

export type OwnProps = Pick<Props, 'index'>;

export type StateProps = Pick<Props, 'currentPos'>;
