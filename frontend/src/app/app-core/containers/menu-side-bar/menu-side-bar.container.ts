import {Component, OnInit} from '@angular/core';
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
})
export class MenuSideBarContainerComponent implements OnInit {

  menuItems$: Observable<MenuItem[]>;

  constructor(private store: Store<fromRoot.AppState>) {
    this.menuItems$ = this.store.select(getMenuItems);
  }

  ngOnInit() {
    this.store.dispatch(new GetMenuItemsAction());
  }

}
