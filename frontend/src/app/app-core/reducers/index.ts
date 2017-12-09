import {ActionReducerMap} from '@ngrx/store';
import * as mainFrame from './main-frame/main-frame.reducer';

export interface AppState {
  mainFrameState: mainFrame.MainFrameState;
}

export const initialState: AppState = {
  mainFrameState: mainFrame.initialState
};

export const reducers: ActionReducerMap<AppState> = {
  mainFrameState: mainFrame.reducer
};

export const getAppState = (state: AppState) => state;
