export interface Props {
  setIsPreload: (value: boolean) => void;
}

export type DispatchProps = Pick<Props, 'setIsPreload'>;
