import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from '../components/Home';
import * as SeedingActions from '../actions/seeding';
import style from './App.css';

@connect(
  state => ({
    seeding: state.seeding
  }),
  dispatch => ({
    actions: bindActionCreators(SeedingActions, dispatch)
  })
)
export default class App extends Component {

  static propTypes = {
    seeding: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };

  render() {
    const { seeding, actions } = this.props;

    return (
      <div className={style.normal}>
        <Home />
      </div>
    );
  }
}
