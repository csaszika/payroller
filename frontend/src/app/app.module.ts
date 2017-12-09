import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FooterComponent} from './components/footer/footer.component';
import {HomeContainerComponent} from './containers/home/home.container';
import {HeaderComponent} from './components/header/header.component';
import {
  MenuSideBarContainerComponent,
} from './containers/menu-side-bar/menu-side-bar.container';
import {StoreModule} from '@ngrx/store';
import {initialState, reducers} from './reducers/index';
import {AccordionModule, DataTableModule, MenuModule, SidebarModule} from 'primeng/primeng';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {EffectsModule} from '@ngrx/effects';
import {MenuItemEffects} from './effects/menu-item.effects';
import {ProductSheetEffects} from './effects/product-sheet.effects';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    AccordionModule,
    AppRoutingModule,
    BrowserModule,
    DataTableModule,
    HttpClientModule,
    MenuModule,
    SidebarModule,
    StoreModule.forRoot(reducers, {initialState}),
    EffectsModule.forRoot([MenuItemEffects, ProductSheetEffects])
  ],
  declarations: [
    AppComponent,
    FooterComponent,
    HomeContainerComponent,
    HeaderComponent,
    MenuSideBarContainerComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
