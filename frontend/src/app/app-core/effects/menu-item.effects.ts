import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {GET_MENU_ITEMS} from '../actions/menu-items/menu-items-action.types';
import {HttpClient} from '@angular/common/http';
import {MenuItemsLoadedAction} from '../actions/menu-items/menu-items.actions';
import {MenuItem} from '../types/menu-items.types';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/delay';

@Injectable()
export class MenuItemEffects {

  @Effect()
  loadMenuItems$ = this.actions$
    .ofType(GET_MENU_ITEMS)
    .switchMap(() =>
      this.http.get<MenuItem[]>('assets/mock-data/menu-items.json')
        .map(menuItems => {
          return new MenuItemsLoadedAction(menuItems);
        }));

  constructor(private actions$: Actions, private http: HttpClient) {
  }
}

