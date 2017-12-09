import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';
import * as productSheet from './product-sheet/product-sheet.reducer'

export interface AppState {
  productSheetState: productSheet.ProductSheetState;
}

export const initialState: AppState = {
  productSheetState: productSheet.initialState
};

export const reducers: ActionReducerMap<AppState> = {
  productSheetState: productSheet.reducer
};

export const PRODUCT_SHEET_STATE = 'productSheetState';

export const getProductSheetState = createFeatureSelector(PRODUCT_SHEET_STATE);
