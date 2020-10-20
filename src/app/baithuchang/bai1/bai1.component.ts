import { Component, DefaultIterableDiffer, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';
@Component({
  selector: 'app-bai1',
  templateUrl: './bai1.component.html',
  styleUrls: ['./bai1.component.css']
})
export class Bai1Component implements OnInit {
  cities1: any;
  dateValue1: string;
  dateValue2:string;
  selectedCities1 = null;
  txtnoidung = null;
  constructor() { }
  en: any;
  catagoris: detai[];
  ca: detai;
  first = 0;
  rows = 10;
  search(){
    console.log(this.selectedCities1);
    console.log(this.dateValue1);
    // this.ca.danhmuc = this.selectedCities1;
    // this.ca.ngaytaotungay = this.dateValue1;
    // this.ca.ngaytaodenngay = this.dateValue2;
    // this.ca.tieude = this.txtnoidung;
    // this.ca.url = "#";
    // console.log(this.ca);
    // alert(this.ca.ngaytaodenngay);
  }
  ngOnInit(): void {
    this.cities1 = [
      {name: 'Ba công khai', code: 'RM'},
      {name: 'Khoa lý luận chính trị', code: 'LDN'},
      {name: 'Khoa khoa học cơ bản', code: 'IST'},
      {name: 'Đội ngũ cán bộ Trường ĐHSPKT Hưng Yên', code: 'PRS'}
  ];
    this.en = {
      firstDayOfWeek: 0,
      dayNames: ["Chủ nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"],
      dayNamesShort: ["cn", "2", "3", "4", "5", "6", "7"],
      dayNamesMin: ["CN","T2","T3","T4","T5","T6","T7"],
      monthNames: [ "tháng 1","tháng 2","tháng 3","tháng 4","tháng 5","tháng 6","tháng 7","tháng 8","tháng 9","tháng 10","tháng 11","tháng 12" ],
      monthNamesShort: [ "1", "2", "3", "4", "5", "6","7", "8", "9", "10", "11", "12" ],
      today: 'Hôm nay',
      clear: 'Clear',
      dateFormat: 'dd/mm/yy',
      weekHeader: 'tuần',
      icon:"pi pi-calendar"
    };
    this.catagoris = [
      {
        id:1,
        tieude: "Ba công khai",
        danhmuc: 2,
        ngaytaotungay:"07/10/2020",
        ngaytaodenngay: "08/10/2020",
        url :"#"
      },
      {
        id:2,
        tieude: "Khoa Lý luận chính trị",
        danhmuc: 3,
        ngaytaotungay:"07/10/2020",
        ngaytaodenngay: "08/10/2020",
        url :"#"
      },
      {
        id:3,
        tieude: "Khoa khoa học cơ bản",
        danhmuc: 4,
        ngaytaotungay:"07/10/2020",
        ngaytaodenngay: "08/10/2020",
        url :"#"
      },
      {
        id:5,
        tieude: "Đội ngũ cán bộ Trường ĐHSPKT Hưng Yên",
        danhmuc: 5,
        ngaytaotungay:"07/10/2020",
        ngaytaodenngay: "08/10/2020",
        url :"#"
      }
    ]
  }
  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.catagoris ? this.first === (this.catagoris.length - this.rows): true;
  }

  isFirstPage(): boolean {
    return this.catagoris ? this.first === 0 : true;
  }
}
interface detai{
  id:number;
  tieude:string;
  danhmuc:number;
  ngaytaotungay:string;
  ngaytaodenngay:string;
  url :string;
}
