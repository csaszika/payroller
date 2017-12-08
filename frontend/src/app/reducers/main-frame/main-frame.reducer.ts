import {MenuItem} from '../../types/menu-items.types';
import * as menuItems from '../../actions/menu-items/menu-items.actions';
import {MENU_ITEMS_LOADED} from '../../actions/menu-items/menu-items-action.types';

export interface MainFrameState {
  headerTitle: string;
  menuItems: MenuItem[];
}

export const initialState: MainFrameState = {
  headerTitle: 'Tailor Management',
  menuItems: []
};

export function reducer(state: MainFrameState = initialState, action: menuItems.Actions): MainFrameState {

  switch (action.type) {
    case MENU_ITEMS_LOADED:
      return {
        ...state,
        menuItems: action.payload as MenuItem[]
      };
    default:
      return state;
  }
}
