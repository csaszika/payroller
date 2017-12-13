import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeContainerComponent} from './app-core/containers/home/home.container';
import {ProductSheet} from "./product-sheet/types/product-sheet.types";
import {ProductSheetComponent} from "./product-sheet/container/product-sheet/product-sheet.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeContainerComponent},
  { path: 'productSheet', component: ProductSheetComponent},
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})

export class AppRoutingModule { }
