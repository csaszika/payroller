import * as faqSheet from 'faq-sheet.reducer'
import {ActionReducerMap, createFeatureSelector} from "@ngrx/store";

export interface AppState {
  faqSheetState: faqSheet.FaqSheetState;
}

export const initialState: AppState = {
  faqSheetState: faqSheet.initialState
};

export const reducers: ActionReducerMap<AppState> = {
  faqSheetState: faqSheet.reducer
};

export const FAQ_SHEET_STATE = 'faqSheetState';

export const getFaqSheetState = createFeatureSelector(FAQ_SHEET_STATE);
