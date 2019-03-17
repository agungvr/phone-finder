export const GET_PHONE_SEARCH = "GET_PHONE_SEARCH";
export const GET_PHONE_YEARS_FILTER = "GET_PHONE_YEARS_FILTER";
export const GET_PHONE_BRANDS_FILTER = "GET_PHONE_BRANDS_FILTER";
export const SET_PHONE_FILTERED = "SET_PHONE_FILTERED";

export const getPhoneSearch = (keyword) => ({
  type: GET_PHONE_SEARCH,
  payload: keyword
});

export const getPhoneYearFilter = (data) => ({
  type: GET_PHONE_YEARS_FILTER,
  payload: data
});

export const getPhonesBrandFilter = (data) => ({
  type: GET_PHONE_BRANDS_FILTER,
  payload: data
});

export const setPhoneFilter = (data) => ({
  type: SET_PHONE_FILTERED,
  payload: data
});

