import {Action} from '@ngrx/store';
import {ADD_FAQ, FAQS_LOADED, GET_FAQS, POST_FAQ} from './faq.action.types';
import {Faq} from '../types/faq.types';


export class GetFaqsAction implements Action {
  readonly type = GET_FAQS;

  constructor(public payload: any = null) {}
}

export class FaqsLoadedAction implements Action {
  readonly type = FAQS_LOADED;

  constructor(public payload: Faq[]) {}
}
//ide felvenni minden actiont

export class PostFaqsAction implements Action {
  readonly type = POST_FAQ;
  constructor(public payload: Faq) {}
}

export class AddFaqAction implements Action {
  readonly type = ADD_FAQ;
  constructor(public payload: Faq) {}
}

export type Actions = GetFaqsAction
  | FaqsLoadedAction | PostFaqsAction | AddFaqAction;
