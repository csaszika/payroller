import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MenuModule,MenuItem} from 'primeng/primeng';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class SideMenuComponent implements OnInit {

  constructor() { }

  items: MenuItem[];

  ngOnInit() {
    this.items = [{
      label: 'Label One',
      items: [
        {label: 'Home', icon: 'fa-home', routerLink:"/home"},
        {label: 'FAQ', icon: 'fa-puzzle-piece', routerLink: "/faq"},

      ]
    },
      {
        label: 'Label Two',
        items: [
          {label: "Product Sheet", icon: 'fa-book', routerLink: "/productSheet"},
          {label:"Work Product Sheet", routerLink: "/workProductSheet", icon: "fa-line-chart "},
                ]
      }];
  }

}
