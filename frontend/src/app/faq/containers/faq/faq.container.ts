import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {getFaqs} from '../../reducers/faq.selector';
import {Store} from '@ngrx/store';
import * as fromRoot from '../../reducers';
import {DeleteFaqAction, GetFaqsAction, PostFaqAction} from '../../actions/faq.actions';
import {Faq} from '../../types/faq.types';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-faq-component',
  templateUrl: './faq.container.html',
  styleUrls: ['./faq.container.css']
})
export class FaqsContainerComponent implements OnInit {

  faqs$: Observable<Faq[]>;
  faqForm: FormGroup;

  constructor(private store: Store<fromRoot.FaqFeatureState>,
              private formBuilder: FormBuilder) {
    this.faqs$ = this.store.select(getFaqs);
  }

  ngOnInit() {
    this.store.dispatch(new GetFaqsAction());
    this.defineForm();
  }

  private defineForm() {
    this.faqForm = this.formBuilder.group({
      question: ['', Validators.required],
      answer: ['', Validators.required]
    });
  }

  addFaq() {
    const question = this.faqForm.get('question').value;
    const questionSign = question.substr(question.length - 1) === '?' ? '' : '?';
    // todo static id number is temporary solution
    this.store.dispatch(new PostFaqAction({
      id: 3,
      answer: this.faqForm.get('answer').value,
      question: this.faqForm.get('question').value + questionSign
    }));
    this.faqForm.reset();
  }

  deleteFaq(faq: Faq) {
    this.store.dispatch(new DeleteFaqAction(faq));
  }

}
