import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {FaqComponent} from "./faq/faq.component";
import {HomeComponent} from "./home/home.component";
import {ProductsheetComponent} from "./productsheet/productsheet.component";
import {WorkdataProductsheetComponent} from "./workdata-productsheet/workdata-productsheet.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'faq', component: FaqComponent },
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'productSheet', component: ProductsheetComponent },
  { path: 'workProductSheet', component: WorkdataProductsheetComponent }

];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})


export class AppRoutingModule { }
