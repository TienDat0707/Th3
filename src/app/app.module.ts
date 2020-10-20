import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Routes, RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
const appRouter : Routes = [
  {
    path:"",
    loadChildren:()=> import("../app/huongdan/mau1/mau1.module").then((m)=>m.Mau1Module)
  },
  {
    path:"baitap",
    loadChildren:()=>import("../app/baithuchang/baithuchang.module").then((m)=>m.BaithuchangModule)
  }
] 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouter),
    BrowserAnimationsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
