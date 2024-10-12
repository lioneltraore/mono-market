import { createReducer, on } from '@ngrx/store';
import { CategoryActions } from '../index';

export interface CategoryState {
  categories: string[];
  currentCategorie: string;
  error: string;
}

export const initialState: CategoryState = {
  categories: [],
  currentCategorie: '',
  error: '',
};

export const categoryReducer = createReducer(
  initialState,
  on(CategoryActions.success, (state) => ({
    ...state,
    categories: state.categories,
    error: ''
  })),
  on(CategoryActions.failure, state => ({
    ...state,
    categories: [],
    error: state.error
  }))
);
