import {MenuItem} from '../../types/menu-items.types';
import * as menuItemAction from '../../actions/menu-items/menu-items.actions';
import {MENU_ITEMS_LOADED} from '../../actions/menu-items/menu-items-action.types';
import {MenuItemsLoadedAction} from '../../actions/menu-items/menu-items.actions';
import {languages} from "../../constants/languanges.constants";

export interface MainFrameState {
  headerTitle: string;
  menuItems: MenuItem[];
  languages: Array<string>;
}

export const initialState: MainFrameState = {
  headerTitle: 'Tailor Management',
  menuItems: [],
  languages: languages
};

export function reducer(state: MainFrameState = initialState, action: menuItemAction.Actions): MainFrameState {
  switch (action.type) {
    case MENU_ITEMS_LOADED:
      return <MainFrameState>{
        ...state,
        menuItems: (<MenuItemsLoadedAction>action).payload as MenuItem[]
      };
    default:
      return state;
  }
}
