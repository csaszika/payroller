import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {Http} from '@angular/http';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';

import {AccordionModule, SidebarModule} from 'primeng/primeng';
import {DataTableModule,SharedModule} from 'primeng/primeng';
import {MenuModule,MenuItem} from 'primeng/primeng';

import { AppRoutingModule } from './/app-routing.module';

import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import {DataServiceService} from "../services/data-service.service";
import { MySideBarComponent } from './my-side-bar/my-side-bar.component';
import { WorkdataProductsheetComponent } from './workdata-productsheet/workdata-productsheet.component';
import { ProductsheetComponent } from './productsheet/productsheet.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FaqComponent,
    HeaderComponent,
    FooterComponent,
    SideMenuComponent,
    MySideBarComponent,
    WorkdataProductsheetComponent,
    ProductsheetComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AccordionModule,
    MenuModule,
    SidebarModule,
    AppRoutingModule,
    DataTableModule,
    HttpModule,

  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
