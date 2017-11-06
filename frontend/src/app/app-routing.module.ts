import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {FaqComponentComponent} from "./faq-component/faq-component.component";
import {HowtouseComponentComponent} from "./howtouse-component/howtouse-component.component";
import {HomeComponentComponent} from "./home-component/home-component.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'faq', component: FaqComponentComponent },
  { path: 'home', component: HomeComponentComponent},
  { path: 'howToUse', component: HowtouseComponentComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})


export class AppRoutingModule { }
