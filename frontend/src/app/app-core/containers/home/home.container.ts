import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromRoot from '../../reducers';

@Component({
  selector: 'app-home-component',
  templateUrl: './home.container.html',
  styleUrls: ['./home.container.css'],

})
export class HomeContainerComponent implements OnInit {

  constructor(private store: Store<fromRoot.AppState>) { }

  /**
   * @Panni
   * todo: add a jpg to this component, kind of welcome picture
   * todo 2: logout button into sidebar
   * todo 3: css fix in sidebar and header
   * todo 4: for get to know ngrx action lifecycle create a container for FAQ menu point (you can find the mock json in assets)
   *
   * help for todo 4:
   * 0. create your own module for FAQ (with routing -> like in productSheet module)
   * 1. create ngrx actions (get, loaded, add new faq, delete faq)
   * 2. create an effect to get faq data from json(your effect should be added to module)
   * 3. create your own reducer and State (FaqState)
   * 4. add selectors
   * 5. create container and select faq data from store
   * 6. add your container to routing
   * 7. check it and pr :) todo: have fun and ask if there is a ? sign in your head
   * 8. in the end I would like to see a menu point that shows me some faq-s with answers and I can add a new one (delete is bonus)
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
