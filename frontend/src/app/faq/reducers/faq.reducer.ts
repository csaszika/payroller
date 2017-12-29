import {Faq} from '../types/faq.types';
import * as faqActions from '../actions/faq.actions';
import {ADD_FAQ, FAQS_LOADED} from '../actions/faq.action.types';


export interface FaqsState {
  faqs: Faq[];
}
export const initialState: FaqsState = {
  faqs: [],
};
export function reducer(state: FaqsState = initialState, action: faqActions.Actions): FaqsState {

  switch (action.type) {
    case FAQS_LOADED:
         return {
        ...state,
        faqs: action.payload as Faq[]
      };

    case ADD_FAQ:
      return {
        ...state,
        faqs: [...state.faqs, action.payload as Faq]
      };
    default:
      return state;
  }
}
