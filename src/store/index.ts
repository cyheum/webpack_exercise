import { combineReducers } from 'redux';
import mainStore from './modules/store';

const rootReducer = combineReducers({
  mainStore,
});

export default rootReducer;
