
import { getFileInfo } from '../api/fileInfo';

import * as types from '../constants/ActionTypes';


function receiveFileInfo(id, json) {
  return {
    type: types.GET_FILE_INFO_REQUEST_SUCCESS,
    id,
    ...json
  };
}

function requestFileInfo(id) {
  return {
    type: types.GET_FILE_INFO_REQUEST,
    id
  };
}

function dispatchFileInfo(file) {
  return (dispatch) => {
    dispatch(requestFileInfo(file.id));
    return getFileInfo(file)
        .then(json => dispatch(receiveFileInfo(file.id, json)));
  };
}

function shouldFetchFileInfo(file) {
  return !file.title; // consider adding a timer to when it was last fetched
}

export function fetchFileInfoIfNeeded(file) {
  return (dispatch, getState) => {
    if (shouldFetchFileInfo(getState(), file)) {
      return dispatch(dispatchFileInfo(file));
    }
  };
}
