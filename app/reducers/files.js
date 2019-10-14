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
    return state.filter(file =>
      file.id !== action.id
    );
  },
  [ActionTypes.GET_FILE_INFO](state, action) {
    const { id } = action;
    return state;
  },
  [ActionTypes.GET_FILE_INFO_REQUEST_SUCCESS](state, action) {
    const { id, tournament, event, phase } = action;
    // find the file and then update the file
    const fetchedTitle = `${tournament.name} - ${event.name} - ${phase.name}`;
    return state.map(file =>
      (file.id === id ?
        Object.assign({}, file,
          {
            title: file.title ? file.title : fetchedTitle,
            fetchedTitle,
            tournament,
            event,
            phase,
          }) :
        file)
      );
  }
};

export default function seeding(state = initialState, action) {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
}
