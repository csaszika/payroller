import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';
import * as productSheetReducer from './product-sheet/product-sheet.reducer'

export interface AppState {
  productSheetState: productSheetReducer.ProductSheetState;
}

export const initialState: AppState = {
  productSheetState: productSheetReducer.initialState
};

export const reducers: ActionReducerMap<AppState> = {
  productSheetState: productSheetReducer.reducer
};

export const PRODUCT_SHEET_STATE = 'productSheetState';

// export const getProductSheetState = createFeatureSelector(PRODUCT_SHEET_STATE);
export const getAppState = (state: AppState) => state;
