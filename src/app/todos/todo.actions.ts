import { createAction, props } from '@ngrx/store';

export const create = createAction(
  '[TODO] Create Todo',
  props<{ text: string }>()
);

export const toggle = createAction(
  '[TODO] Toggle Todo',
  props<{ id: number }>()
);

export const edit = createAction(
  '[TODO] Edit Todo',
  props<{ id: number, text: string }>()
);

export const remove = createAction(
  '[TODO] Delete Todo',
  props<{ id: number }>()
);

export const toggleAll = createAction(
  '[TODO] Clean completed',
  props<{ completed: boolean }>()
);

export const cleanCompleted = createAction('[TODO] ToggleAll Todo');