import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromRoot from '../../reducers';
import {Observable} from 'rxjs/Observable';
import {MenuItem} from '../../types/menu-items.types';
import {getLanguages, getMenuItems} from '../../reducers/main-frame/main-frame.selectors';
import {GetMenuItemsAction} from '../../actions/menu-items/menu-items.actions';
import {TranslateService} from "@ngx-translate/core";
import {languages} from "../../constants/languanges.constants";
import {async} from 'rxjs/scheduler/async';

@Component({
  selector: 'menu-side-bar',
  templateUrl: './menu-side-bar.container.html',
  styleUrls: ['./menu-side-bar.container.css'],
})
export class MenuSideBarContainerComponent implements OnInit {

  menuItems$: Observable<MenuItem[]>;
  languages: Array<string>;
  defaultLanguage: string;
  // languages: string[] = languages;
  // defaultLanguage = languages[0];


  constructor(private store: Store<fromRoot.AppState>, private translate: TranslateService) {
    this.menuItems$ = this.store.select(getMenuItems);

    this.store.select(getLanguages).subscribe(res => this.languages = res);
    this.defaultLanguage = this.languages[1];

    this.translate.setDefaultLang(this.defaultLanguage) ;
    this.translate.currentLang = this.defaultLanguage;
  }

  ngOnInit() {
    this.store.dispatch(new GetMenuItemsAction())
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

}
