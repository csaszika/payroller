import {FaqsContainerComponent} from './containers/faq/faq.container';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {path: 'faqs', component: FaqsContainerComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})

export class FaqRoutingModule {
}
