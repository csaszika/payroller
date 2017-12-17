import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeContainerComponent} from './app-core/containers/home/home.container';
import {ProductSheetContainerComponent} from "./product-sheet/containers/product-sheet/product-sheet.container";
import {FaqContainerComponent} from "./faq/containers/faq/faq.container";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeContainerComponent},
  // { path: 'productSheet', component: ProductSheetContainerComponent},
  { path: 'faq', component: FaqContainerComponent},

];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})

export class AppRoutingModule { }
