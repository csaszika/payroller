import {Action} from '@ngrx/store';
import {FAQS_LOADED, GET_FAQS} from './faq.action.types';
import {FaqType} from '../types/faq.type';


export class GetFaqsAction implements Action {
  readonly type = GET_FAQS;

  constructor() {}
}

export class FaqsLoadedAction implements Action {
  readonly type = FAQS_LOADED;

  constructor(public payload: FaqType[]) {}
}

export type Actions = GetFaqsAction
  | FaqsLoadedAction;
