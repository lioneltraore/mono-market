import { inject, Injectable } from '@angular/core';
import * as CategoryActions from './category.action';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CategoryService } from './category.service';
import { catchError, EMPTY, exhaustMap, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryEffects {
  actions$ = inject(Actions);
  categoryService = inject(CategoryService);

  loadCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CategoryActions.categories),
      exhaustMap(() =>
        this.categoryService.getCategories().pipe(
          map((categories) => CategoryActions.success(categories)),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
