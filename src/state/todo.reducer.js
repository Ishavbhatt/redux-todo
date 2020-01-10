import {
  ADD_TODO,
  ADD_CHECKED,
  ADD_DELETE,
  ALL_TODO,
  ALL_ACTIVE,
  ALL_COMPLETED
} from "../types";

let id = 0;

const initial_state = [];

export default function reducer(state = initial_state, action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat({
        todotext: action.payload,
        completed: false,
        id: id++
      });

    case ADD_CHECKED:
      return state.map(event => {
        if (event.id == action.payload) {
          event.completed = !event.completed;
        }
        return event;
      });
    case ADD_DELETE:
      return state.filter(event => event.id !== action.payload);
    case ALL_TODO:
      return {
        ...state
      };
    case ALL_ACTIVE:
      return state.filter(e => e.completed);
    case ALL_COMPLETED:
      return state.filter(event => !event.completed);

    default:
      return state;
  }
}
