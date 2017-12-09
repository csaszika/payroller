import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromRoot from '../../reducers';

@Component({
  selector: 'app-home-component',
  templateUrl: './home.container.html',
  styleUrls: ['./home.container.css'],

})
export class HomeContainerComponent implements OnInit {

  /**
   * I think this component could be the first page
   * after login and it should contain a nice picture at the center
   */
  constructor(private store: Store<fromRoot.AppState>) { }

  /**
   * @Panni
   * todo: add a jpg to this component, kind of welcome picture
   * todo 2: logout button into sidebar
   * todo 3: css fix in sidebar and header
   * todo 4: for get to know ngrx action lifecycle create a container for FAQ menu point (you can find the json in assets)
   *
   * help for todo 4:
   * 1. create 2 actions
   * 2. create an effect to get faq data from json(your effect should be added to module)
   * 3. create your own reducer and State
   * 4. add selectors
   * 5. create container and select faq data from store
   * 6. add your container to routing
   * 7. check it and pr :) todo: have fun and ask if there is a ? sign
   */
  ngOnInit() {
  }

  /**
   * Dictionary:
   * TLSZ = terméklapszám
   * DB = darabszám
   * VN = varrónő kódja (lehet inkább VK kéne akkor már)
   * MK = műveleti kód (pl: nyakbevarrás = 3)
   * N = norma(ft/db)
   */

}
