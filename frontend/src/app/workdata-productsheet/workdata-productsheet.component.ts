import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-workdata-productsheet',
  templateUrl: './workdata-productsheet.component.html',
  styleUrls: ['./workdata-productsheet.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WorkdataProductsheetComponent implements OnInit {

  datas: {VN: number, MK: number, DB: number, N: number}[] = [

    {VN: 1, MK: 1, DB: 20, N: 12},
    {VN: 3, MK: 1, DB: 10, N: 12},
    {VN: 4, MK: 1, DB: 15, N: 12},
    {VN: 5, MK: 1, DB: 5, N: 12}

  ];
  // datas: {"ProductID": string, "productAmount":number}[];
  constructor() {
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
