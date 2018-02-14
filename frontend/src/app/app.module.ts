import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {DataTableModule, SidebarModule} from 'primeng/primeng';
import {EffectsModule} from '@ngrx/effects';
import {FaqModule} from './faq/faq.module';
import {HomeContainerComponent} from './app-core/containers/home/home.container';
import {HttpClient} from '@angular/common/http';
import {initialState, reducers} from './app-core/reducers';
import {MenuItemEffects} from './app-core/effects/menu-item.effects';
import {MenuSideBarContainerComponent} from './app-core/containers/menu-side-bar/menu-side-bar.container';
import {ProductSheetModule} from './product-sheet/product-sheet.module';
import {StoreModule} from '@ngrx/store';
import {TranslateModule, TranslateLoader, TranslateService} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';


@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    DataTableModule,
    FaqModule,
    ProductSheetModule,
    SidebarModule,
    StoreModule.forRoot(reducers, {initialState}),
    EffectsModule.forRoot([MenuItemEffects]),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  declarations: [
    AppComponent,
    HomeContainerComponent,
    MenuSideBarContainerComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [TranslateService],
  bootstrap: [AppComponent]
})

export class AppModule {
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

