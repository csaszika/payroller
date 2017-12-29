import {GET_FAQS, POST_FAQ} from '../actions/faq.action.types';

import {HttpClient} from '@angular/common/http';
import {Actions, Effect} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import {Faq} from '../types/faq.types';
import {AddFaqAction, FaqsLoadedAction} from '../actions/faq.actions';

@Injectable()
export class FaqEffects {

  @Effect()
  loadFaqs$ = this.actions$
    .ofType(GET_FAQS)
    .switchMap(() =>
      this.http.get<Faq[]>('assets/mock-data/faqs.json')
        .map(faqs => {
          return new FaqsLoadedAction(faqs);
        }));

  @Effect()
  postFaq$ = this.actions$
    .ofType(POST_FAQ)
    .map(action => {
      return new AddFaqAction(action.payload  as Faq);
      }
    );
  //mapet itt kicserélni késpbb switchmapre...
  constructor(private actions$: Actions, private http: HttpClient) {

  }
}
