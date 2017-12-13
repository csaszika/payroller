
import {Injectable} from "@angular/core";
import {Actions, Effect} from "@ngrx/effects";
import {GET_FAQ_SHEET} from "../action/faq-sheet-action.types";
import {HttpClient} from "@angular/common/http";
import {FaqSheet} from "../types/faq-sheet.types";
import {FaqSheetLoadedAction} from "../action/faq-sheet.action";

@Injectable()
export class FaqSheetEffects {

  constructor(private actions$: Actions, private http: HttpClient) {
  }

  @Effect
  loadFaqSheets$ = this.actions$
  .ofType(GET_FAQ_SHEET)
    .switchMap(
      ()=>this.http.get<FaqSheet>('assets/mock-data/faqs.json')
        .map(faqSheetData => {
          return new FaqSheetLoadedAction(faqSheetData);
        } )
    )

}
