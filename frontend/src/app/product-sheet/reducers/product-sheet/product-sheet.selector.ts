import {ProductSheetState} from "./product-sheet.reducer";
// import {getProductSheetState} from "../index";
import {createSelector} from "@ngrx/store";
import {AppState, getAppState} from "../index";

export const getProductSheetState = createSelector(getAppState,
  (appState: AppState) => appState.productSheetState);

export const getProductSheetItems = createSelector(getProductSheetState,(state: ProductSheetState) => state.productSheets);
