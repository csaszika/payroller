import {ProductSheet} from '../../types/product-sheet.types';
import {PRODUCT_SHEETS_LOADED} from '../../actions/product-sheets/product-sheets-action.types';
import * as productSheet from '../../actions/product-sheets/product-sheets.actions';

export interface ProductSheetState {
  productSheets: ProductSheet[];
  selectedProductSheet: ProductSheet;
}

export const initialState: ProductSheetState = {
  productSheets: [],
  selectedProductSheet: null
};

export function reducer(state: ProductSheetState = initialState, action: productSheet.Actions): ProductSheetState {

  switch (action.type) {
    case PRODUCT_SHEETS_LOADED:
      return {
        ...state,
        productSheets: action.payload as ProductSheet[]
      };
    default:
      return state;
  }
}


