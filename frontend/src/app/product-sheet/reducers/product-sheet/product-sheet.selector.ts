import {ProductSheetState} from './product-sheet.reducer';
import {createSelector} from '@ngrx/store';
import {getProductSheetFeatureState, ProductSheetFeatureState} from '../index';

export const getProductSheetState = createSelector(getProductSheetFeatureState,
  (appState: ProductSheetFeatureState) => appState.productSheetState);

export const getProductSheets = createSelector(getProductSheetState,
  (state: ProductSheetState) => state.productSheets);
