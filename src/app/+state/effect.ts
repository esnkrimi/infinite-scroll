import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { action } from './action';
import { map, switchMap } from 'rxjs';
import { MyService } from '../service';

@Injectable()
export class storeEffect {
  constructor(private actions$: Actions, private service: MyService) {}
  startFetchUserOfTrip: any = createEffect(() => {
    return this.actions$.pipe(
      ofType(action.initFetchData),
      switchMap((index: any) => {
        return this.service
          .fetch(index.index)
          .pipe(map((res: any) => action.fetchData({ data: res })));
      })
    );
  });
}
