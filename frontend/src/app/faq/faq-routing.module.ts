import {FaqContainerComponent} from './containers/faq/faq.container';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {path: 'faq', component: FaqContainerComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})

export class FaqRoutingModule {
}
