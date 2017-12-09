import {createSelector} from '@ngrx/store';
import {AppState, getAppState} from '../index';
import {MainFrameState} from './main-frame.reducer';

export const getMainFrameState = createSelector(getAppState,
  (appState: AppState) => appState.mainFrameState);

export const getHeaderTitle = createSelector(getMainFrameState,
  (state: MainFrameState) => state.headerTitle);

export const getMenuItems = createSelector(getMainFrameState,
  (state: MainFrameState) => state.menuItems);
