export interface Props {
  isPreload: boolean;
}

export interface PropsUI extends Props {}

export type StateProps = Pick<Props, 'isPreload'>;
