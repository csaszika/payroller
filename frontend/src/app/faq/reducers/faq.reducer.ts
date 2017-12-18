import {FaqType} from '../types/faq.type';
import * as faqActions from '../actions/faq.actions';
import {FAQS_LOADED} from '../actions/faq.action.types';


export interface FaqsState {
  faqs: FaqType[];
}
export const initialState: FaqsState = {
  faqs: [],
};
export function reducer(state: FaqsState = initialState, action: faqActions.Actions): FaqsState {

  switch (action.type) {
    case FAQS_LOADED:
         return {
        ...state,
        faqs: action.payload as FaqType[]
      };
    default:
      return state;
  }
}
