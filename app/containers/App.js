import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from '../components/Home';
import * as FileActions from '../actions/files';
import style from './App.css';

@connect(
  state => ({
    files: state.files
  }),
  dispatch => ({
    actions: bindActionCreators(FileActions, dispatch)
  })
)
export default class App extends Component {

  static propTypes = {
    seeding: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };

  render() {
    const { files, actions } = this.props;

    return (
      <div className={style.normal}>
        <Home />
      </div>
    );
  }
}
