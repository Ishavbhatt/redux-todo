import {
  ADD_TODO,
  ADD_CHECKED,
  ADD_DELETE,
  ALL_TODO,
  ALL_ACTIVE,
  ALL_COMPLETED
} from "../types";

const id = 0;

export function addTodo(wholetodo) {
  return { type: ADD_TODO, payload: wholetodo };
}

export function checkedTodo(wholetodo) {
  return { type: ADD_CHECKED, payload: wholetodo };
}

export function deleteTodo(wholetodo) {
  return { type: ADD_DELETE, payload: wholetodo };
}

export function allTodo() {
  return { type: ALL_TODO };
}
export function activeTodo() {
  return { type: ALL_ACTIVE };
}
export function completedTodo() {
  return { type: ALL_COMPLETED };
}
