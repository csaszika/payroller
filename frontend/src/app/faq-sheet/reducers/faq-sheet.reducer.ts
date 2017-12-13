import {FaqSheet} from "../types/faq-sheet.types";
import * as faqSheet from '../action/faq-sheet.action';
import {FAQ_SHEET_LOADED} from "../action/faq-sheet-action.types";

export interface FaqSheetState {
  faqSheets: FaqSheet[];
  selectedFaqSheet: FaqSheet;
}

export const initialState: FaqSheetState  = {
  faqSheets: [],
  selectedFaqSheet: null
}

export function reducer(state: FaqSheetState = initialState, action: faqSheet.Actions): FaqSheetState {

  switch (action.type) {
    case FAQ_SHEET_LOADED:
      return {
        ...state,
        faqSheets: action.payload as FaqSheet[]
      };
    default:
      return state;
  }
}
