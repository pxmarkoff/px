import { combineReducers } from 'redux';

import app from './app';
import filter from './filter';
import navigation from './navigation';

export default combineReducers({ app, filter, navigation });
