import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductSheetContainerComponent} from './containers/product-sheet/product-sheet.container';

const routes: Routes = [
  { path: 'productSheet', component: ProductSheetContainerComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forChild(routes) ],
})

export class ProductSheetRoutingModule { }
