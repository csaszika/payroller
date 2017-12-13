import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {initialState, PRODUCT_SHEET_STATE, reducers} from './reducers/index';
import {EffectsModule} from '@ngrx/effects';
import {ProductSheetEffects} from './effects/product-sheet.effects';
import {HttpClientModule} from '@angular/common/http';
import {ProductSheetRoutingModule} from './product-sheet-routing.module';
import { ProductSheetComponent } from './container/product-sheet/product-sheet.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ProductSheetRoutingModule,
    StoreModule.forFeature(PRODUCT_SHEET_STATE, reducers, {initialState}),
    EffectsModule.forFeature([ProductSheetEffects])
  ],
  declarations: [ProductSheetComponent]
})
export class ProductSheetModule { }
