import React, { Component, PropTypes } from 'react';
import FileImporter from './FileImporter';
import FileList from './FileList';

export default class Home extends Component {

  static propTypes = {
    fileState: PropTypes.object.isRequired
  };

  render() {
    const { fileState } = this.props;

    return (
      <section>
        <FileList />
        <FileImporter />
      </section>
    );
  }
}
