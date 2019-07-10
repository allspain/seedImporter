import * as types from '../constants/ActionTypes';

export function addFile(content) {
  return { type: types.ADD_FILE, content };
}

export function deleteFile(id) {
  return { type: types.DELETE_FILE, id };
}

export function getFileInfo(id) {
  return { type: types.GET_FILE_INFO, id };
}
