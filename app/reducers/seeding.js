import * as ActionTypes from '../constants/ActionTypes';

const initialState = [];

const actionsMap = {
  [ActionTypes.ADD_FILE](state, action) {
    return [{
      id: state.reduce((maxId, file) => Math.max(file.id, maxId), -1) + 1,
      title: false,
      content: action.content,
      dateAdded: Date.now()
    }, ...state];
  },
  [ActionTypes.DELETE_FILE](state, action) {
    return state.filter(todo =>
      todo.id !== action.id
    );
  },
  [ActionTypes.GET_FILE_INFO](state, action) {
    const { id } = action;
    return state;
  },
};

export default function seeding(state = initialState, action) {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
}
