import { takeLatest, select, put } from 'redux-saga/effects';
import { GET_PHONE_SEARCH, GET_PHONE_YEARS_FILTER, GET_PHONE_BRANDS_FILTER, setPhoneFilter } from "./actions";

const getPhones = state => {
  return {
    data: state.getPhones.data,
    master: state.getPhones.master
  }
};

const getFiltered = state => {
  return {
    search: state.filterPhones.search,
    brands: state.filterPhones.brands,
    years: state.filterPhones.years
  }
};


export function* getPhonesSearchSaga(action) {

  const phones = yield select(getPhones);
  const filtered = yield select(getFiltered);
  const { search, brands, years } = filtered;
  if (search !== '' || brands.length > 0 || years.length > 0) {
    const _search = phones.master.filter(item => item.name.toLowerCase().indexOf(search) > -1);

    let _brand = _search.filter(item => brands.includes(item.brand));
    if (!_brand.length) _brand = _search;

    let _year =
      years.length > 0 ?
        _brand.filter(item => years.includes(item.release_year.toString()))
        :
        _brand;

    yield put(setPhoneFilter(_year))
  } else {
    yield put(setPhoneFilter(phones.master))
  }

}


export function* getPhoneBrandFilterSaga(action) {

  const phones = yield select(getPhones);
  const filtered = yield select(getFiltered);
  const { search, brands, years } = filtered;
  if (search !== '' || brands.length > 0 || years.length > 0) {
    const _search = phones.master.filter(item => item.name.toLowerCase().indexOf(search) > -1);

    let _year = _search.filter(item => years.includes(item.release_year.toString()));
    if (!_year.length) _year = _search;

    let _brand =
      brands.length > 0 ?
        _year.filter(item => brands.includes(item.brand))
        :
        _year;

    yield put(setPhoneFilter(_brand))

  } else {
    yield put(setPhoneFilter(phones.master))
  }

}

export function* getPhoneYearFilterSaga(action) {

  const phones = yield select(getPhones);
  const filtered = yield select(getFiltered);
  const { search, brands, years } = filtered;
  if (search !== '' || brands.length > 0 || years.length > 0) {
    const _search = phones.master.filter(item => item.name.toLowerCase().indexOf(search) > -1);

    let _brand = _search.filter(item => brands.includes(item.brand));
    if (!_brand.length) _brand = _search;

    let _year =
      years.length > 0 ?
        _brand.filter(item => years.includes(item.release_year.toString()))
        :
        _brand;

    yield put(setPhoneFilter(_year))
  } else {
    yield put(setPhoneFilter(phones.master))
  }

}


export default function* getPhonesSaga() {
  yield takeLatest(GET_PHONE_SEARCH, getPhonesSearchSaga);
  yield takeLatest(GET_PHONE_BRANDS_FILTER, getPhoneBrandFilterSaga);
  yield takeLatest(GET_PHONE_YEARS_FILTER, getPhoneYearFilterSaga);
}
