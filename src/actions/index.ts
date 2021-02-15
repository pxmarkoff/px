import * as AppActions from './app';
import * as FilterActions from './filter';
import * as NavigationActions from './navigation';

export default {
  app: { ...AppActions },
  filter: { ...FilterActions },
  navigation: { ...NavigationActions },
};
