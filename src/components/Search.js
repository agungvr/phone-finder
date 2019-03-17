import React from 'react'
import { Input } from 'semantic-ui-react'
import { Select } from "./Dropdown";
import { compose, withHandlers } from 'recompose';
import { getPhonesBrandFilter, getPhoneSearch, getPhoneYearFilter } from "../redux/phones/filter/actions";
import { connect } from 'react-redux'

const years = ['2019', '2018', '2017', '2016', '2015', '2014', '2013'];
const brands = ['Apple', 'Samsung', 'Lenovo', 'Xiomi', 'LG'];

const enhance = compose(
  connect(
    null,
    dispatch => ({
      getPhoneSearch: (keyword) => dispatch(getPhoneSearch(keyword)),
      getPhoneBrandsFilter: (data) => dispatch(getPhonesBrandFilter(data)),
      getPhoneYearsFilter: (data) => dispatch(getPhoneYearFilter(data))
    })
  ),
  withHandlers({
    onSearch: props => (value) => {
      props.getPhoneSearch(value)
    }
  })
);

export const Search = enhance((props) => (
  <div className='p-3 search'>
    <Input
      onChange={(e) => props.onSearch(e.target.value)}
      className='w-100'
      icon={{ name: 'search', circular: true, link: true }}
      placeholder='Search Phone...'/>
    <div className='d-flex justify-content-around mt-3'>
      <div className='flex--4'>
        <Select {...props} label={'Years'} data={years}/>
      </div>
      <div className='flex--4'>
        <Select {...props} label={'Brands'} data={brands}/>
      </div>
    </div>
  </div>
));
