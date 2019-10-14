import React, { Component, PropTypes } from 'react';

import style from './FileListItem.css';
import buttons from './buttons.css';

import { connect } from 'react-redux';
import { deleteFile, importFile } from '../actions/files';
import { fetchFileInfoIfNeeded } from '../actions/fileInfo';
import { getFormattedDate } from '../utils/date';


class FileListItem extends Component {
  static propTypes = {
    file: PropTypes.object.isRequired,
    deleteFile: PropTypes.func.isRequired,
    fetchFile: PropTypes.func.isRequired,
    importFile: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { fetchFile, file } = this.props;
    fetchFile(file);
  }

  render() {
    const { file } = this.props;
    return (
      <div className={style.fileListItem}>
        <div className={style.fileListItemHeader}>
          <div>
            <div className={style.fileListItemHeaderTitle}>
              {file.title}
            </div>

          </div>
          <div className={style.fileListItemHeaderData}>{getFormattedDate(file.dateAdded)}</div>
        </div>
        <div className={style.fileListItemFooter}>
          <div>{file.content.length} Seeds</div>
          <div className={style.fileListItemFooterActions}>
            <button onClick={() => { this.props.importFile(file.id); }}>Import</button>
            <button className={buttons.red} onClick={() => { this.props.deleteFile(file.id); }}>
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}


export default connect(
  null,
  {
    deleteFile,
    fetchFile: fetchFileInfoIfNeeded,
    importFile
  })(FileListItem);
