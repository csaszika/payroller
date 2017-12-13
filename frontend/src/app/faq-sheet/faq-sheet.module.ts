import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {FaqSheetRoutingModule} from "./faq-sheet-routing.module";
import {StoreModule} from "@ngrx/store";
import { FaqSheetComponent } from './container/faq-sheet/faq-sheet.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FaqSheetRoutingModule,
    StoreModule.forFeature()
  ],
  declarations: [FaqSheetComponent]
})
export class FaqSheetModule { }
