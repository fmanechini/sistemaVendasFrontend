import {combineReducers} from 'redux'
import {snackbarReducers} from './snackbarReducers'
import {saleSummaryReducers} from './saleSummaryReducers'
import {saleDetailsReducers} from './saleDetailsReducers'


const rootReducers = combineReducers({
  snackbar: snackbarReducers,
  saleSummary: saleSummaryReducers,
  saleDetails: saleDetailsReducers

});


export default rootReducers;
