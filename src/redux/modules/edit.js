import config from 'config';
import req from 'jquery';
const EDIT = 'simple-blog/edit/EDIT';


const LOAD = 'simple-blog/edit/LOAD';
const LOAD_SUCCESS = 'simple-blog/edit/LOAD_SUCCESS';
const LOAD_FAIL = 'simple-blog/edit/LOAD_FAIL';

const initialState = {
  title: '',
  content: '',
  loaded: false,
};

export default function edit(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        title: action.result[0].title,
        content: action.result[0].content
      };
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error
      };
    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return globalState.edit && globalState.edit.loaded;
}

export function load(id) {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: client => client.get('posts/' + id)
  };
}
