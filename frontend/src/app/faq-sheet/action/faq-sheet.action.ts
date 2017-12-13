import {Action} from "@ngrx/store";
import {FAQ_SHEET_LOADED, GET_FAQ_SHEET} from "./faq-sheet-action.types";
import {FaqSheet} from "../types/faq-sheet.types";

export class GetFaqSheetAction implements Action{
  readonly type = GET_FAQ_SHEET

  constructor(){}
}

export class FaqSheetLoadedAction implements Action {
  readonly type = FAQ_SHEET_LOADED
  constructor(public payload: FaqSheet[]){}
}

export type Actions = GetFaqSheetAction | FaqSheetLoadedAction;
