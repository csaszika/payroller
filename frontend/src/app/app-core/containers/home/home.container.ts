import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromRoot from '../../reducers';

@Component({
  selector: 'app-home-component',
  templateUrl: './home.container.html',
  styleUrls: ['./home.container.css'],

})
export class HomeContainerComponent {

  constructor(private store: Store<fromRoot.AppState>) { }

  /**
   * Dictionary:
   * TLSZ = terméklapszám
   * DB = darabszám
   * VN = varrónő kódja (lehet inkább VK kéne akkor már)
   * MK = műveleti kód (pl: nyakbevarrás = 3)
   * N = norma(ft/db)
   */
}
