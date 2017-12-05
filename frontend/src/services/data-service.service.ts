import { Injectable } from '@angular/core';
import {Data} from '../assets/Data';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {HttpModule} from '@angular/http';

@Injectable()
export class DataServiceService {
  datas: Data[];
  constructor(private http: Http) {}

  getData(){
    // this.http.get('/assets/data.json').subscribe((res:Response) => this.datas = res.json());
    return this.http.get('../assets/data.json')
      .map(res => res.json());

    //   .subscribe(data => {this.datas = data});
    // console.log("getData() was called");
    // console.log(JSON.stringify(this.datas));
    // return this.datas;
  }
}
//.map(res => <Data[]> res.json())
