import React, { lazy } from 'react'
import { withRouter } from 'react-router-dom';
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { getPhonesRequest } from "../../redux/phones/get/actions";

const Container = lazy(() => import('./container'));

const withConnect = connect(
  state => ({
    getPhones: state.getPhones,
    filtered: state.filterPhones
  }),
  dispatch => ({
    getPhonesRequest: () => dispatch(getPhonesRequest())
  })
);

const withLifecycle = lifecycle({
  componentDidMount() {
    this.props.getPhonesRequest();
  }
});

const Home = props => (<Container {...props}/>);

export default compose(
  withRouter, withConnect, withLifecycle
)(Home);

