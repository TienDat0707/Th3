import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';
import { Mau1Component } from './mau1.component';
import { SearchComponent } from './search/search.component';
import {PanelModule} from 'primeng/panel';
import {TableModule} from 'primeng/table';
import {FormsModule} from '@angular/forms';
const appRouter : Routes = [
  {
    path:"",
    component:Mau1Component,
    children:[
      {
        path:'',component:SearchComponent
      }
    ]
  }
] 


@NgModule({
  declarations: [Mau1Component,SearchComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(appRouter),
    PanelModule,
    TableModule,
    FormsModule
  ]
})
export class Mau1Module { }
