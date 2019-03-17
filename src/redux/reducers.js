import { combineReducers } from 'redux';
import { getPhonesReducer } from "./phones/get/reducer";
import { getPhoneFilterReducer } from "./phones/filter/reducer";

export default combineReducers({
  getPhones: getPhonesReducer,
  filterPhones: getPhoneFilterReducer
});
