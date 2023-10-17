import { createActionGroup, props } from '@ngrx/store';
import { datas } from './state';

export const action = createActionGroup({
  source: 'AppState',
  events: {
    'fetch data': props<{ data: datas[] }>(),
    'init fetch data': props<{ index: number }>(),
  },
});
