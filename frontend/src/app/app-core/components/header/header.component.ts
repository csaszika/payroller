import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromRoot from '../../reducers';
import {Observable} from 'rxjs/Observable';
import {getHeaderTitle} from '../../reducers/main-frame/main-frame.selectors';
import {languages} from "../../../translation/translation.module"
import {TranslateService} from "@ngx-translate/core";

// import {TranslationService} from "../../../../translation/translation.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit{

  languages: string[];
  title$: Observable<string>;

  constructor(private store: Store<fromRoot.AppState>, private translate: TranslateService) {
    this.title$ = this.store.select(getHeaderTitle);
    translate.setDefaultLang('en');
  }

  ngOnInit(){
    this.languages = languages;
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

}
