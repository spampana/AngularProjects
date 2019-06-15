import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule}  from '@angular/common/http';
import { SharedHttpService } from './services/app.shared.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[],
  //Providers provides DI container for all Angular Services of the current project.
  providers:[SharedHttpService ]
})
export class SharedModule { }
