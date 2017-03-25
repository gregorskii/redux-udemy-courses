import { combineReducers } from 'redux';
import * as storage from 'redux-storage';

import WeatherReducer from './weather';

const rootReducer = storage.reducer(combineReducers({
  weather: WeatherReducer
}));

export default rootReducer;
