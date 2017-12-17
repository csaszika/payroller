import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {StoreModule} from "@ngrx/store";
import {FAQS_STATE, reducers, initialState} from "./reducers/index";

import {EffectsModule} from "@ngrx/effects";
import {FaqEffects} from "./effects/faq.effects";
import {FaqContainerComponent} from "./containers/faq/faq.container";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(FAQS_STATE, reducers, {initialState}),
    EffectsModule.forFeature([FaqEffects])

  ],
  declarations: [FaqContainerComponent]
})
export class FaqModule { }


// @NgModule({
//   imports: [
//     CommonModule,
//     HttpClientModule,
//     ProductSheetRoutingModule,
//     StoreModule.forFeature(PRODUCT_SHEET_STATE, reducers, {initialState}),
//     EffectsModule.forFeature([ProductSheetEffects])
//   ],
//   declarations: [ProductSheetContainerComponent]
// })
// export class ProductSheetModule { }
