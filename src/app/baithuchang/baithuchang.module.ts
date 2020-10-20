import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';
import { Bai1Component } from './bai1/bai1.component';
import { Bai2Component } from './bai2/bai2.component';
import { BaithuchangComponent } from './baithuchang.component';
import {FormsModule} from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
const appRouter : Routes = [
  {
    path:'',
    component:BaithuchangComponent,
    children:[
      {
        path:"",
        component: Bai1Component
      },
      {
        path:"bai1",
        component: Bai1Component
      },
      {
        path:"bai2",
        component: Bai2Component
      }
    ]
  }
] 

@NgModule({
  declarations: [BaithuchangComponent,Bai1Component,Bai2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(appRouter),
    FormsModule,
    DropdownModule,
    InputTextModule,
    CalendarModule,
    ButtonModule,
    TableModule
  ]
})
export class BaithuchangModule { }
