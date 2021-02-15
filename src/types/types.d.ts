/* STATES */
export interface AppState {
  isPreload: boolean;
  route: string;
  screenMode: ScreenMode;
}

export interface FilterState {
  filterSelected: string;
}

export interface NavigationState {
  navigationSelected: string;
}

export interface SliderState {
  currentPos: number;
  endPos: number;
}

/* REDUX STUFF */
export interface ReduxAction {
  type: string;
  payload?: any;
}

export interface ReduxState {
  app: AppState;
  filter: FilterState;
  navigation: NavigationState;
  slider: SliderState;
}

/* DATA */
export type ScreenMode = 'mobile' | 'desktop';

export type DeviceType = 'mobile' | 'tablet' | 'laptop';

/* MODEL */
export interface Project {
  address: string;
  deviceType: DeviceType;
  images: string[];
  title: string;
}
