import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromRoot from '../../reducers';
import {Observable} from 'rxjs/Observable';
import {MenuItem} from '../../types/menu-items.types';
import {getMenuItems} from '../../reducers/main-frame/main-frame.selectors';
import {GetMenuItemsAction} from '../../actions/menu-items/menu-items.actions';
import {TranslateService} from "@ngx-translate/core";
import {languages} from "../../../translation/translation.module"

@Component({
  selector: 'menu-side-bar',
  templateUrl: './menu-side-bar.container.html',
  styleUrls: ['./menu-side-bar.container.css'],
})
export class MenuSideBarContainerComponent implements OnInit {

  menuItems$: Observable<MenuItem[]>;
  languages: string[];
  defaultLanguage = languages[1];


  constructor(private store: Store<fromRoot.AppState>, private translate: TranslateService) {
    this.menuItems$ = this.store.select(getMenuItems);
    this.translate.setDefaultLang(this.defaultLanguage);
    this.translate.currentLang = this.defaultLanguage;
  }

  ngOnInit() {
    this.store.dispatch(new GetMenuItemsAction())
    this.languages = languages;

  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

}
