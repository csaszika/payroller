import {ProductSheetState} from "./product-sheet.reducer";
import {createSelector} from "@ngrx/store";
import {ProductSheetFeatureState, getProductSheetState} from '../index';

export const getProductSheetState = createSelector(getProductSheetState,
  (appState: ProductSheetFeatureState) => appState.productSheetState);

export const getProductSheets = createSelector(getProductSheetState,
  (state: ProductSheetState) => state.productSheets);
