const token = '607d5a68be77714867e5b1373dfbef4f';

import * as types from '../constants/ActionTypes';
import {
  graphql,

} from 'graphql';

export function addFile(content) {
  return { type: types.ADD_FILE, content };
}

export function deleteFile(id) {
  return { type: types.DELETE_FILE, id };
}

export function requestFileInfo(id) {
  return { type: types.GET_FILE_INFO_REQUEST, id };
}

function receiveFileInfo(id, json) {
  return {
    type: types.GET_FILE_INFO_REQUEST_SUCCESS,
    id,
    fetchedTitle: 'Title'
  };
}

function getFileInfo(id, info) {

}

function shouldFetchFileInfo(state, id) {

}

export function fetchFileInfoIfNeeded(id) {

}
