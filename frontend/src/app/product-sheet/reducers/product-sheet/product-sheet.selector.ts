import {ProductSheetState} from "./product-sheet.reducer";
import {getProductSheetState} from "../index";
import {createSelector} from "@ngrx/store";

export const getProductSheetItems = createSelector(getProductSheetState,
  (state: ProductSheetState) => state.productSheets);
