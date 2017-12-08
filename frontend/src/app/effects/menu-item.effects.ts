import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/delay';
import {Http} from '@angular/http';
import {MenuItemsLoadedAction} from '../actions/menu-items/menu-items.actions';
import {MenuItem} from '../types/menu-items.types';
import {GET_MENU_ITEMS} from '../actions/menu-items/menu-items-action.types';

@Injectable()
export class MenuItemEffects {

  @Effect()
  loadMenuItems$ = this.actions$
    .ofType(GET_MENU_ITEMS)
    .switchMap(() =>
      this.http.get('assets/mock-data/menu-items.json')
        .map(res => res.json())
        .map(data => {
          return new MenuItemsLoadedAction(data as MenuItem[]);
        }));

  constructor(private actions$: Actions, private http: Http) {
  }
}

