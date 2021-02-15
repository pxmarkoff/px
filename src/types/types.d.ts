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

/* REDUX STUFF */
export interface ReduxAction {
  type: string;
  payload?: any;
}

export interface ReduxState {
  app: AppState;
  filter: FilterState;
  navigation: NavigationState;
}

/* DATA */
export type ScreenMode = 'mobile' | 'desktop';

/* MODEL */
