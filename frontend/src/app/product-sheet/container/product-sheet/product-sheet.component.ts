import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import * as fromRoot from "../../reducers";
import {ProductSheet} from "../../types/product-sheet.types";
import {Store} from "@ngrx/store";
import {GetProductSheetsAction} from "../../actions/product-sheets/product-sheets.actions";
import {getProductSheetItems} from "../../reducers/product-sheet/product-sheet.selector";

@Component({
  selector: 'app-product-sheet',
  templateUrl: './product-sheet.component.html',
  styleUrls: ['./product-sheet.component.css']
})
export class ProductSheetComponent implements OnInit {

  productSheetItem$: Observable<ProductSheet[]>;

  constructor(private store: Store<fromRoot.AppState>) {
    this.productSheetItem$ = this.store.select(getProductSheetItems);
    this.productSheetItem$.subscribe(
      (productSheets: ProductSheet[])=>console.log(JSON.stringify(productSheets));
  )


  }

  ngOnInit() {
    this.store.dispatch(new GetProductSheetsAction())
  }

}
