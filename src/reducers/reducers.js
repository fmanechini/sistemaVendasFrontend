import {combineReducers} from 'redux'
import {snackbarReducers} from './snackbarReducers'


const rootReducers = combineReducers({
  snackbar: snackbarReducers
});


export default rootReducers;
