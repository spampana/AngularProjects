import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeesRoutingModule } from './employees-routing-module';



@NgModule({
  declarations: [EmployeesListComponent],
  imports: [
    CommonModule,
    EmployeesRoutingModule
  ],
  exports:[]// used only in case eargerly loading
})
export class EmployeesModule { }
