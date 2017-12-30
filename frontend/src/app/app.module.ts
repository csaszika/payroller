import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HomeContainerComponent} from './app-core/containers/home/home.container';
import {HeaderComponent} from './app-core/components/header/header.component';
import {
  MenuSideBarContainerComponent,
} from './app-core/containers/menu-side-bar/menu-side-bar.container';
import {StoreModule} from '@ngrx/store';
import {initialState, reducers} from './app-core/reducers';
import {DataTableModule, SidebarModule} from 'primeng/primeng';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {EffectsModule} from '@ngrx/effects';
import {MenuItemEffects} from './app-core/effects/menu-item.effects';
import {HttpClientModule} from '@angular/common/http';
import {ProductSheetModule} from './product-sheet/product-sheet.module';
import {FaqModule} from './faq/faq.module';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    DataTableModule,
    FaqModule,
    HttpClientModule,
    ProductSheetModule,
    SidebarModule,
    StoreModule.forRoot(reducers, {initialState}),
    EffectsModule.forRoot([MenuItemEffects])
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeContainerComponent,
    MenuSideBarContainerComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
