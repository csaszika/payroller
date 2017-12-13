import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule],
  exports: [RouterModule.forChild(routes)],
  declarations: []
})
export class FaqSheetRoutingModule { }
