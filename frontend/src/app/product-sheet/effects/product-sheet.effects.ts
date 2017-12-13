import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/delay';
import {HttpClient} from '@angular/common/http';
import {GET_PRODUCT_SHEETS} from '../actions/product-sheets/product-sheets-action.types';
import {ProductSheet} from '../types/product-sheet.types';
import {ProductSheetsLoadedAction} from '../actions/product-sheets/product-sheets.actions';

@Injectable()
export class ProductSheetEffects {

  @Effect()
  loadProductSheets$ = this.actions$
    .ofType(GET_PRODUCT_SHEETS)
    .switchMap(() =>
      this.http.get<ProductSheet[]>('assets/mock-data/product-sheets.json')
        .map(productSheets => {
          console.log("inside ps-effect: "+JSON.stringify(productSheets));
          return new ProductSheetsLoadedAction(productSheets);
        }));

  constructor(private actions$: Actions, private http: HttpClient) {
  }
}

