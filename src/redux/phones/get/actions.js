import { apiAction } from "../../api/actions";

export const GET_PHONES_REQUEST = "GET_PHONES_REQUEST";
export const GET_PHONES_SUCCESS = "GET_PHONES_SUCCESS";
export const GET_PHONES_FAILURE = "GET_PHONES_FAILURE";

export const getPhonesRequest = () => apiAction({
  label: GET_PHONES_REQUEST,
  url: '/data/phones.json',
  onSuccess: getPhonesSuccess,
  onFailure: getPhonesFailure
});

export const getPhonesSuccess = (data) => ({
  type: GET_PHONES_SUCCESS,
  payload: data
});

export const getPhonesFailure = (data) => ({
  type: GET_PHONES_FAILURE,
  payload: data
});

