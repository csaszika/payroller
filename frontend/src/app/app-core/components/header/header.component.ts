import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromRoot from '../../reducers';
import {Observable} from 'rxjs/Observable';
import {getHeaderTitle} from '../../reducers/main-frame/main-frame.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

  title$: Observable<string>;

  constructor(private store: Store<fromRoot.AppState>) {
    this.title$ = this.store.select(getHeaderTitle);
  }
}
