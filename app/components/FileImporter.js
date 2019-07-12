import React from 'react';
import { connect } from 'react-redux';
import { csv } from 'csvtojson';

import * as actionCreators from '../actions/seeding';

const FileImporter = (props) => {
  let fileReader;

  const onFileDone = (jsonArr) => {
    props.addFile(jsonArr);
  };

  const handleFileRead = () => {
    const content = fileReader.result;
    const jsonArr = [];
    csv({
      checkType: true // converts numbers to numbers
    })
    .fromString(content)
    .subscribe((jsonObj) => {
      jsonArr.push(jsonObj);
    })
    .on('done', () => {
      onFileDone(jsonArr);
    })
    .on('error', () => {
      console.error('ERROR');
    });
  };

  const fileChanged = (file) => {
    fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
    fileReader.readAsText(file);
  };

  return (
    <div>
      <input
        type="file"
        id="file"
        accept=".csv"
        onChange={e => fileChanged(e.target.files[0])}
      />
    </div>
  );
};

export default connect(null, actionCreators)(FileImporter);
