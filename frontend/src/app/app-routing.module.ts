import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeContainerComponent} from './app-core/containers/home/home.container';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeContainerComponent},
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})

export class AppRoutingModule { }
