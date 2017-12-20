import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';
import * as faqsReducer from './faq.reducer';

export interface FaqFeatureState {
  faqsState: faqsReducer.FaqsState;
}

export const initialState: FaqFeatureState = {
  faqsState: faqsReducer.initialState
};

export const reducers: ActionReducerMap<FaqFeatureState> = {
  faqsState: faqsReducer.reducer
};

export const FAQS_STATE = 'FaqsFeatureState';

export const getFaqsFeatureState = createFeatureSelector(FAQS_STATE);
