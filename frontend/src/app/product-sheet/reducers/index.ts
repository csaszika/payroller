import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';
import * as productSheetReducer from './product-sheet/product-sheet.reducer'

export interface ProductSheetFeatureState {
  productSheetState: productSheetReducer.ProductSheetState;
}

export const initialState: ProductSheetFeatureState = {
  productSheetState: productSheetReducer.initialState
};

export const reducers: ActionReducerMap<ProductSheetFeatureState> = {
  productSheetState: productSheetReducer.reducer
};

export const PRODUCT_SHEET_STATE = 'productSheetFeatureState';

export const getProductSheetState = createFeatureSelector(PRODUCT_SHEET_STATE);
