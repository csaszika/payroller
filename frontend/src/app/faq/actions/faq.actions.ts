import {Action} from '@ngrx/store';
import {ADD_FAQ, DELETE_FAQ, FAQS_LOADED, GET_FAQS, POST_FAQ, REMOVE_FAQ} from './faq.action.types';
import {Faq} from '../types/faq.types';


export class GetFaqsAction implements Action {
  readonly type = GET_FAQS;

  constructor(public payload: any = null) {}
}

export class FaqsLoadedAction implements Action {
  readonly type = FAQS_LOADED;

  constructor(public payload: Faq[]) {}
}

export class PostFaqAction implements Action {
  readonly type = POST_FAQ;
  constructor(public payload: Faq) {}
}

export class AddFaqAction implements Action {
  readonly type = ADD_FAQ;
  constructor(public payload: Faq) {}
}

export class DeleteFaqAction implements Action {
  readonly type = DELETE_FAQ;
  constructor(public payload: Faq){}
}

export class RemoveFaqAction implements Action {
  readonly type = REMOVE_FAQ;
  constructor(public payload: Faq){}
}

export type Actions = GetFaqsAction
  | FaqsLoadedAction
  | PostFaqAction
  | AddFaqAction
  | RemoveFaqAction
  | DeleteFaqAction;
