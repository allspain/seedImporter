import * as ActionTypes from '../constants/ActionTypes';

const initialState = {
  isImporting: false,
  importId: null,
  items: []
};

const actionsMap = {
};

export default function importing(state = initialState, action) {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
}
