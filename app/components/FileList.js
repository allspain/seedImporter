import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import FileListItem from './FileListItem';

const FileList = (props) => {
  console.log(props);
  return (<div>
    {props.files.map(file => <FileListItem file={file} />)}
  </div>);
};

FileList.propTypes = {
  files: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return { files: state.seeding || [] };
}

export default connect(mapStateToProps)(FileList);
