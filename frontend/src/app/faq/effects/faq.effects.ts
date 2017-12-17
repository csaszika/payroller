import {GET_FAQS} from '../actions/faq.action.types';

import {HttpClient} from '@angular/common/http';
import {Actions, Effect} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import {FaqType} from '../types/faq.type';
import {FaqsLoadedAction} from "../actions/faq.actions";

@Injectable()
export class FaqEffects {

  @Effect()
  loadFaqs$ = this.actions$
    .ofType(GET_FAQS)
    .switchMap(() =>
      this.http.get<FaqType[]>('assets/mock-data/faqs.json')
        .map(faqs => {
          console.log('in effect constr: '+JSON.stringify(faqs));
          return new FaqsLoadedAction(faqs);
        }));


  constructor(private actions$: Actions, private http: HttpClient) {

  }
}
