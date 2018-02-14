import {AppState, getAppState} from '../index';
import {createSelector} from '@ngrx/store';
import {MainFrameState} from './main-frame.reducer';

export const getMainFrameState = createSelector(getAppState,
  (appState: AppState) => appState.mainFrameState);

export const getLanguages = createSelector(getMainFrameState,
  (state: MainFrameState) => state.languages);

export const getMenuItems = createSelector(getMainFrameState,
  (state: MainFrameState) => state.menuItems);
