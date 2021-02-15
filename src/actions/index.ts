import * as AppActions from './app';
import * as FilterActions from './filter';
import * as NavigationActions from './navigation';
import * as SliderActions from './slider';

export default {
  app: { ...AppActions },
  filter: { ...FilterActions },
  navigation: { ...NavigationActions },
  slider: { ...SliderActions },
};
