import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {getFaqs} from '../../reducers/faq.selector';
import {Store} from '@ngrx/store';
import * as fromRoot from '../../reducers';
import {GetFaqsAction, PostFaqsAction} from '../../actions/faq.actions';
import {Faq} from "../../types/faq.types";

@Component({
  selector: 'app-faq-component',
  templateUrl: './faq.container.html',
  styleUrls: ['./faq.container.css']
})
export class FaqContainerComponent implements OnInit {

  faqs: Observable<Faq[]>;

  /**
   * @Panni
   * todo: use ADD_FAQ and REMOVE_FAQ
   * todo: faq elements in separated blocks with remove button/icon/whatSatisfiesYou
   */
  constructor(private store: Store<fromRoot.FaqFeatureState>) {
    this.faqs = this.store.select(getFaqs);
  }
  ngOnInit() {
    this.store.dispatch(new GetFaqsAction());
  }
  onAddQuestion(){
    console.log('button works');
    this.store.dispatch(new PostFaqsAction({question: 'Mi kell még',answer: 'sok kaja'}));
  }
}
