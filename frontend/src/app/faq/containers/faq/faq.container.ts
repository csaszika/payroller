import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {getFaqs} from '../../reducers/faq.selector';
import {Store} from '@ngrx/store';
import * as fromRoot from '../../reducers';
import {DeleteFaqAction, GetFaqsAction, PostFaqAction} from '../../actions/faq.actions';
import {Faq} from "../../types/faq.types";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-faq-component',
  templateUrl: './faq.container.html',
  styleUrls: ['./faq.container.css']
})
export class FaqContainerComponent implements OnInit {

  faqs: Observable<Faq[]>;
  faqForm: FormGroup;
  isSelected: false;
  selectedFaq: Faq;

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

    this.faqForm = new FormGroup(
      {
        'question': new FormControl(null, Validators.required),
        'answer': new FormControl(null, Validators.required)
      }
    );
  }

  onAddQuestion() {
    if(this.faqForm.valid)
    {this.store.dispatch(new PostFaqAction({question: this.faqForm.get('question').value, answer: this.faqForm.get('answer').value}));
    this.faqForm.reset();}
  }

  onSelect(index: number){
    this.faqs.subscribe((faqs: Faq[]) => {
      return this.selectedFaq = faqs[index];
    })
    ;
  }

  onDeleteQuestion(faq: Faq) {
    this.store.dispatch(new DeleteFaqAction(faq));
    this.clearSelection();
  }

  clearSelection(){
    this.selectedFaq = null;
  }
}
