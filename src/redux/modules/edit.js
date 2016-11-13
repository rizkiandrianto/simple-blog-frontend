import config from 'config';
import req from 'jquery';
const LOAD = 'simple-blog/edit/LOAD';
const LOAD_SUCCESS = 'simple-blog/edit/LOAD_SUCCESS';
const LOAD_FAIL = 'simple-blog/edit/LOAD_FAIL';
const GET_ID = 'simple-blog/edit/GET_ID';

const initialState = {
  title: '',
  content: '',
  loaded: false,
  id: null
};

export default function edit(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true
      };
    case LOAD_SUCCESS:
      if (action.result) {
        return {
          ...state,
          loading: false,
          loaded: true,
          title: action.result[0].title,
          content: action.result[0].content
        };
      }
      return {
        ...state,
        loading: false,
        loaded: false,
        title: action.title,
        content: action.content
      }
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error
      };
    case GET_ID:
      return {
        ...state,
        id: action.id
      };
    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return globalState.edit && globalState.edit.loaded;
}

export function load(id = null) {
  if (id == null) {
    return {
      "type" : LOAD_SUCCESS,
      "title": "",
      "content": ""
    }
  }
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: client => client.get('posts/' + id)
  };
}

export function getID(id) {
  return {
    "type": GET_ID,
    "id": id
  };
}
