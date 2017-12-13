import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';
import * as productSheetReducer from './product-sheet/product-sheet.reducer'

export interface ProductSheetState {
  productSheetState: productSheetReducer.ProductSheetState;
}

export const initialState: ProductSheetState = {
  productSheetState: productSheetReducer.initialState
};

export const reducers: ActionReducerMap<ProductSheetState> = {
  productSheetState: productSheetReducer.reducer
};

export const PRODUCT_SHEET_STATE = 'productSheetState';

// export const getProductSheetState = createFeatureSelector(PRODUCT_SHEET_STATE);
// export const getProductSheetState = (state: AppState) => state;
export const getProductSheetState = (state: ProductSheetState) => state;
