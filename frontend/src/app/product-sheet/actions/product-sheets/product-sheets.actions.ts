import {Action} from '@ngrx/store';
import {GET_PRODUCT_SHEETS, PRODUCT_SHEETS_LOADED} from './product-sheets-action.types';
import {ProductSheet} from '../../types/product-sheet.types';
import {ProductSheetState} from '../../reducers/product-sheet/product-sheet.reducer';

export class GetProductSheetsAction implements ActionWithExecute {
  readonly type = GET_PRODUCT_SHEETS;

  constructor(public payload: any = null) {}
  execute(state: ProductSheetState, action: Actions): ProductSheetState {
    return state;
  }
}

export class ProductSheetsLoadedAction implements ActionWithExecute {
  readonly type = PRODUCT_SHEETS_LOADED;

  constructor(public payload: ProductSheet[]) {}
  execute(state: ProductSheetState, action: Actions): ProductSheetState{
    return <ProductSheetState>{
      ...state,
      productSheets: action.payload as ProductSheet[]
    };
  }
}

export type Actions = GetProductSheetsAction
  | ProductSheetsLoadedAction;

export interface ActionWithExecute extends Action{
  execute(state: ProductSheetState, action: Actions): ProductSheetState;
}
