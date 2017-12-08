import {Action} from '@ngrx/store';
import {GET_PRODUCT_SHEETS, PRODUCT_SHEETS_LOADED} from './product-sheets-action.types';
import {ProductSheet} from '../../types/product-sheet.types';

export class GetProductSheetsAction implements Action {
  readonly type = GET_PRODUCT_SHEETS;

  constructor() {}
}

export class ProductSheetsLoadedAction implements Action {
  readonly type = PRODUCT_SHEETS_LOADED;

  constructor(public payload: ProductSheet[]) {}
}

export type Actions = GetProductSheetsAction
  | ProductSheetsLoadedAction;
