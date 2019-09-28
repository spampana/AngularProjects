import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SepHomeComponent } from './sep-home/sep-home.component';
import { HomeRoutingModule } from './home-routing-module';



@NgModule({
  declarations: [SepHomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports:[SepHomeComponent]
})
export class HomeModule { }

