export interface Props {
  navigationSelected: string;
  setNavigationSelected: (value: string) => void;
}

export interface PropsUI extends Pick<Props, 'navigationSelected'> {
  onFollowingLink: (value: string) => () => void;
}

export type StateProps = Pick<Props, 'navigationSelected'>;
export type DispatchProps = Pick<Props, 'setNavigationSelected'>;
