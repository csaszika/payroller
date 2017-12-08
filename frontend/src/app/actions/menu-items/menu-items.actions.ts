import {Action} from '@ngrx/store';
import {GET_MENU_ITEMS, MENU_ITEMS_LOADED} from './menu-items-action.types';
import {MenuItem} from '../../types/menu-items.types';

export class GetMenuItemsAction implements Action {
  readonly type = GET_MENU_ITEMS;

  constructor() {}
}

export class MenuItemsLoadedAction implements Action {
  readonly type = MENU_ITEMS_LOADED;

  constructor(public payload: MenuItem[]) {}
}

export type Actions = GetMenuItemsAction
  | MenuItemsLoadedAction;
