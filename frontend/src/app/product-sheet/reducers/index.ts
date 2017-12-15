import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';
import * as productSheet from './product-sheet/product-sheet.reducer';

export interface ProductSheetFeatureState {
  productSheetState: productSheet.ProductSheetState;
}

export const initialState: ProductSheetFeatureState = {
  productSheetState: productSheet.initialState
};

export const reducers: ActionReducerMap<ProductSheetFeatureState> = {
  productSheetState: productSheet.reducer
};

export const PRODUCT_SHEET_STATE = 'productSheetFeatureState';

export const getProductSheetFeatureState = createFeatureSelector(PRODUCT_SHEET_STATE);
