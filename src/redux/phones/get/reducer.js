import { GET_PHONES_SUCCESS } from "./actions";
import { SET_PHONE_FILTERED } from "../filter/actions";

import { withLoadable } from "../../app/reducer";

export const initialState = {
  master: [],
  data: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PHONES_SUCCESS:
      return {
        ...state,
        data: action.payload.phones,
        master: action.payload.phones
      };
    case SET_PHONE_FILTERED:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};

export const getPhonesReducer = withLoadable({
  isLoadingAction: 'API_START',
  successAction: 'GET_PHONES_SUCCESS',
  errorAction: 'GET_PHONES_FAILURE',
})(reducer);

