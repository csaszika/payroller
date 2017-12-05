import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MenuItem} from "primeng/primeng";

@Component({
  selector: 'app-my-side-bar',
  templateUrl: './my-side-bar.component.html',
  styleUrls: ['./my-side-bar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MySideBarComponent implements OnInit {

  selectedMenuItem: string;

  MenuItem: {name: string, routerLink: string, icon?: string}[]=[
    {name:"Home", routerLink: "/home", icon: "fa-home"},
    {name:"FAQ", routerLink: "/faq", icon: "fa-question-circle"},
    {name:"Product Sheet", routerLink: "/productSheet", icon: "fa-book"},
    {name:"Work Product Sheet", routerLink: "/workProductSheet", icon: "fa-line-chart "},

  ];
  constructor() {
    this.selectedMenuItem = this.MenuItem[0].name;
  }

  ngOnInit() {
  }

  setSelectedMenuItem(name: string){
    this.selectedMenuItem = name;
    console.log("this.selectedMenuItem: "+this.selectedMenuItem);
}

}
