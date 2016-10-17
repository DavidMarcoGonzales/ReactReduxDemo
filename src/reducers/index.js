/**
 * Created by David on 9/11/2016.
 */
import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from'./authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer =combineReducers({
  courses,
  authors,
  ajaxCallsInProgress
});

export default rootReducer;
