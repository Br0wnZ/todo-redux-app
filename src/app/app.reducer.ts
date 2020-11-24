import { ActionReducerMap } from '@ngrx/store';

import { Todo } from './todos/models/todo.model';
import { validFilters } from './filter/filter.actions';

import { todoReducer } from './todos/todo.reducer';
import { filterReducer } from './filter/filter.reducer';

export interface AppState {
  todos: Todo[],
  filter: validFilters
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filter: filterReducer
}