// All states of app
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
  slideHeight: number;
}

// Things of Redux
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

// Data types
export type ScreenMode = 'mobile' | 'desktop';

export type DeviceType = 'mobile' | 'tablet' | 'laptop';

// Model types
export interface Project {
  address: string;
  deviceType: DeviceType;
  images: string[];
  title: string;
}
