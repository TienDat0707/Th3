import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  data: Product[];
  ma_san_pham:any;
  ten_san_pham:any;
  original_data: any;
  constructor() { }
  ngOnInit(): void {
    this.data = [
      {code:'001',name:'Sản phẩm 1',dvt:'cái',gia:85 },
      {code:'002',name:'Sản phẩm 2',dvt:'cái',gia:632 },
      {code:'003',name:'Sản phẩm 3',dvt:'cái',gia:532 }
    ];
    this.data.push({code:'004',name:'Sản phẩm 4',dvt:'cái',gia:7433 });
    this.original_data = $.extend(true, [], this.data);
  }
  TimKiem(){
    
  }
}
interface Product{
  code:string;
  name:string;
  dvt:string;
  gia:number;
}
