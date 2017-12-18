import {Component, OnInit} from '@angular/core';
import {FaqType} from '../../types/faq.type';
import {Observable} from 'rxjs/Observable';
import {getFaqs} from '../../reducers/faq.selector';
import {Store} from '@ngrx/store';
import * as fromRoot from '../../reducers';
import {GetFaqsAction} from '../../actions/faq.actions';

@Component({
  selector: 'app-faq-component',
  templateUrl: './faq.container.html',
  styleUrls: ['./faq.container.css']
})

export class FaqContainerComponent implements OnInit {

  faqs: Observable<FaqType[]>;

  constructor(private store: Store<fromRoot.FaqFeatureState>) {
    this.faqs = this.store.select(getFaqs);
    console.log('faqcomponent: ' + this.faqs);
  }
  ngOnInit() {
    this.store.dispatch(new GetFaqsAction());
  }
}
