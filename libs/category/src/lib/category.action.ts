import { createAction } from '@ngrx/store';

export const categories = createAction('[Category] Get categories');
export const success = createAction(
  '[Category] Get categories success',
  (categories: string[]) => ({ categories })
);
export const failure = createAction(
  '[Category] Get categories failure',
  (error: string) => ({ error })
);
