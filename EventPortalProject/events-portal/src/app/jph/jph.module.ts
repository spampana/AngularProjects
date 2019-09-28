import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JphPostListComponent } from './jph-post-list/jph-post-list.component';
import {HttpClientModule} from '@angular/common/http';
import { JphService } from './services/jph.service';
import { JPHRoutingModule } from './jph-routing-modules';



@NgModule({
  declarations: [JphPostListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    JPHRoutingModule
  ],
  exports:[],
  providers:[
    JphService
  ]
})
export class JphModule { }
