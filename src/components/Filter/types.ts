export interface Props {
  filterSelected: string;
  setFilterSelected: (value: string) => void;
}

export interface PropsUI extends Pick<Props, 'filterSelected'> {
  isFilterOnPage: boolean;
  onTapFilter: (value: string) => () => void;
  underlinePos: number;
  underlineWidth: number;
}

export type StateProps = Pick<Props, 'filterSelected'>;
export type DispatchProps = Pick<Props, 'setFilterSelected'>;
