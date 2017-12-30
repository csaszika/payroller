import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromRoot from '../../reducers';
import {Observable} from 'rxjs/Observable';
import {getHeaderTitle} from '../../reducers/main-frame/main-frame.selectors';
import {TranslationService} from "../../../../translation/translation.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit{

  languages: string [];
  title$: Observable<string>;

  constructor(private store: Store<fromRoot.AppState>, private translationService: TranslationService) {
    this.title$ = this.store.select(getHeaderTitle);
  }

  ngOnInit(){
    this.languages = this.translationService.languages;
  }

  setLanguage(language: string){
    console.log(language);
    this.translationService.language = language;
  }
}
