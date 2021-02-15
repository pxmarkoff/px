export interface Props {
  currentPos: number;
  endPos: number;
  setCurrentPos: (value: number) => void;
  setEndPos: (value: number) => void;
}

export interface PropsUI {}

export type StateProps = Pick<Props>;

export type DispatchProps = Pick<Props>;
