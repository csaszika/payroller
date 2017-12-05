import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {DataServiceService} from "../../services/data-service.service";
import {Data} from "../../assets/Data";

@Component({
  selector: 'app-productsheet',
  templateUrl: './productsheet.component.html',
  styleUrls: ['./productsheet.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductsheetComponent implements OnInit {

  datas: Data[] = [
    {ProductID: "001", ProductAmount:5},
    {ProductID: "002", ProductAmount:55},
    {ProductID: "003", ProductAmount:5555},

  ];
  // datas: {"ProductID": string, "productAmount":number}[];
  constructor(private dataService: DataServiceService) {
    console.log("DataTableCoponent Constructor was called");
  }

  ngOnInit() {
    // this.dataService.getData().subscribe(data => {this.datas = data});
    console.log("DataTableCoponent ngOninit was called");
    console.log(this.datas);
    // this.datas.push({"ProductID": "001","productAmount": 5 });
    // this.datas.push({"ProductID": "002","productAmount": 8 });
    // this.datas.push({"ProductID": "003","productAmount": 12 });

  }

}
