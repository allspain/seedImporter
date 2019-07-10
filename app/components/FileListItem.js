import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/seeding';


const FileListItem = (props) => {
  const { file } = props;
  return (<div>
    <div>{file.title}</div>
    <div>{file.dateAdded}</div>
    <div><button onClick={() => { props.deleteFile(file.id); }}>Delete</button></div>
  </div>);
};

FileListItem.propTypes = {
  file: PropTypes.object.isRequired,
  deleteFile: PropTypes.func.isRequired
};


export default connect(null, actionCreators)(FileListItem);
