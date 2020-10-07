import {TABLE_RESIZE} from '@/redux/types';

export function rootReducer(state, action) {
  let prevState;
  switch (action.type) {
    case TABLE_RESIZE:
      prevState = state.colState || {};
      return {...state, colState: {
        ...prevState,
        [action.data.id]: action.data.value
      }};
    default: return state;
  }
}
