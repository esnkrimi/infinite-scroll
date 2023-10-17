import { createFeature, createReducer, on } from '@ngrx/store';
import { AppState } from './state';
import { action } from './action';

export const reducerStates = createFeature({
  name: 'AppState',
  reducer: createReducer(
    AppState,
    on(action.fetchData, (states: any, action: any) => {
      return {
        ...states,
        PersonData: action.data,
      };
    })
  ),
});
