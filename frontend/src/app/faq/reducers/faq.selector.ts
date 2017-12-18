import {FaqFeatureState, getFaqsFeatureState} from './index';
import {createSelector} from '@ngrx/store';
import {FaqsState} from './faq.reducer';

export const getFaqsState = createSelector(getFaqsFeatureState,
  (appState: FaqFeatureState) => appState.faqsState);

export const getFaqs = createSelector(getFaqsState,
  (state: FaqsState) => state.faqs);
