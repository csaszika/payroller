import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as fromRoot from '../../reducers';
import {ProductSheet} from '../../types/product-sheet.types';
import {Store} from '@ngrx/store';
import {GetProductSheetsAction} from '../../actions/product-sheets/product-sheets.actions';
import {getProductSheets} from '../../reducers/product-sheet/product-sheet.selector';

@Component({
  selector: 'app-product-sheet',
  templateUrl: './product-sheet.container.html',
  styleUrls: ['./product-sheet.container.css']
})
export class ProductSheetContainerComponent implements OnInit {

  productSheets$: Observable<ProductSheet[]>;

  constructor(private store: Store<fromRoot.ProductSheetFeatureState>) {
    this.productSheets$ = this.store.select(getProductSheets);

  }

  ngOnInit() {
    this.store.dispatch(new GetProductSheetsAction());
  }

}
