import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SepMenuComponent } from './sep-menu/sep-menu.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [SepMenuComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[SepMenuComponent]
})
export class NavigationModule { }
