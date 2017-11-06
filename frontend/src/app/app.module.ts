import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {AccordionModule, MenuModule, SidebarModule} from 'primeng/primeng';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponentComponent } from './home-component/home-component.component';
import { FaqComponentComponent } from './faq-component/faq-component.component';
import { HowtouseComponentComponent } from './howtouse-component/howtouse-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    FaqComponentComponent,
    HowtouseComponentComponent
  ],
  imports: [
    BrowserModule,
    AccordionModule,
    MenuModule,
    SidebarModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
