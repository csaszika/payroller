import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/delay';
import {Http} from '@angular/http';
import {GET_PRODUCT_SHEETS} from '../actions/product-sheets/product-sheets-action.types';
import {ProductSheet} from '../types/product-sheet.types';
import {ProductSheetsLoadedAction} from '../actions/product-sheets/product-sheets.actions';

@Injectable()
export class ProductSheetEffects {

  @Effect()
  loadProductSheets$ = this.actions$
    .ofType(GET_PRODUCT_SHEETS)
    .switchMap(() =>
      this.http.get('assets/mock-data/product-sheets.json')
        .map(res => res.json())
        .map(data => {
          return new ProductSheetsLoadedAction(data as ProductSheet[]);
        }));

  constructor(private actions$: Actions, private http: Http) {
  }
}

