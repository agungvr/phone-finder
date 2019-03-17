import { GET_PHONE_SEARCH, GET_PHONE_YEARS_FILTER, GET_PHONE_BRANDS_FILTER } from "./actions";

export const initialState = {
  search: '',
  brands: [],
  years: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PHONE_SEARCH:
      return {
        ...state,
        search: action.payload
      };
    case GET_PHONE_YEARS_FILTER:
      return {
        ...state,
        years: action.payload
      };
    case GET_PHONE_BRANDS_FILTER:
      return {
        ...state,
        brands: action.payload
      };
    default:
      return state;
  }
};

export const getPhoneFilterReducer = reducer;

