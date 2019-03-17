import React from 'react'
import { Search } from "../../components/Search";
import { List } from "./section/list";

const Container = props => {
  const { getPhones } = props;
  return (
    <div className='container'>
      <div className='mobile'>
        <Search {...props}/>
        <List fetching={getPhones.isLoading} data={getPhones.data} {...props}/>
      </div>
    </div>
  )
};

export default Container;
