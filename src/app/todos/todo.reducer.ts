import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { create, edit, toggle, remove, toggleAll, cleanCompleted } from './todo.actions';
 
export const initialState: Todo[] = [ 
  new Todo('Save the world'),
  new Todo('Sing a song'),
  new Todo('Tasty Javascript'),
  new Todo('Learn Python')
];
 
const _todoReducer = createReducer(
  initialState,
  on(create, (state, { text }) => [...state, new Todo( text )]),
  on(toggle, (state, { id }) => state.map(todo => todo.id === id ? ({...todo, completed: !todo.completed}) : todo)),
  on(edit, (state, { id, text }) => state.map(todo => todo.id === id ? ({ ...todo, text }) : todo)),
  on(remove, (state, { id }) => state.filter( todo => todo.id !== id)),
  on(toggleAll, (state, { completed }) => state.map( todo => ({...todo, completed: completed}))),
  on(cleanCompleted, (state) => state.filter( ( { completed } ) => !completed)),
);
 
export function todoReducer(state, action) {
  return _todoReducer(state, action);
}