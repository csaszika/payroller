import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromRoot from '../../reducers';
import {Observable} from 'rxjs/Observable';
import {MenuItem} from '../../types/menu-items.types';
import {getMenuItems} from '../../reducers/main-frame/main-frame.selectors';
import {GetMenuItemsAction} from '../../actions/menu-items/menu-items.actions';

@Component({
  selector: 'menu-side-bar',
  templateUrl: './menu-side-bar.container.html',
  styleUrls: ['./menu-side-bar.container.css'],
  encapsulation: ViewEncapsulation.None
})
export class MenuSideBarContainerComponent implements OnInit {

  menuItems$: Observable<MenuItem[]>;

  /**
   * @Panni
   * todo: why do you need ViewEncapsulation.None?
   */

  constructor(private store: Store<fromRoot.AppState>) {
    this.menuItems$ = this.store.select(getMenuItems);
    this.menuItems$.subscribe(
      (menuitems: MenuItem[])=>console.log(JSON.stringify(menuitems)));
      }

  ngOnInit() {
    // should be tested the ngrx-router instead of this
    this.store.dispatch(new GetMenuItemsAction());
  }

  setSelectedMenuItem(name: string) {
    // this.store.dispatch(new SetSelectedMenuItem());
  }

}
