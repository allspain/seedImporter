const token = '607d5a68be77714867e5b1373dfbef4f';

import * as types from '../constants/ActionTypes';
import { importPhaseSeeding } from '../api/import';

export function addFile(content) {
  return { type: types.ADD_FILE, content };
}

export function deleteFile(id) {
  return { type: types.DELETE_FILE, id };
}

function receiveImportFile(id, json) {
  return {
    type: types.IMPORT_FILE_REQUEST_SUCCESS,
    id,
    ...json
  };
}

function requestImportFile(id) {
  return {
    type: types.IMPORT_FILE_REQUEST,
    id
  };
}

function dispatchImportFile(file) {
  return (dispatch) => {
    dispatch(requestImportFile(file.id));
    return importPhaseSeeding(file)
      .then(json => dispatch(receiveImportFile(file.id, json)));
  };
}

export function importFile(id) {
  return (dispatch, getState) => {
    const state = getState();
    const currFile = state.files.find(file => file.id === id);
    return dispatch(dispatchImportFile(currFile));
  };
}
