import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {FAQS_STATE, initialState, reducers} from './reducers/index';
import {EffectsModule} from '@ngrx/effects';
import {FaqEffects} from './effects/faq.effects';
import {FaqsContainerComponent} from './containers/faq/faq.container';
import {FaqRoutingModule} from './faq-routing.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FaqRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature(FAQS_STATE, reducers, {initialState}),
    EffectsModule.forFeature([FaqEffects])

  ],
  declarations: [FaqsContainerComponent]
})
export class FaqModule {
}
