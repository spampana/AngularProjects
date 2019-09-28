import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesListComponent } from './employees-list/employees-list.component'

const employeesRoutes: Routes = [
    {
        path: "",
        component: EmployeesListComponent
    }
];


@NgModule({
    imports: [RouterModule.forChild(employeesRoutes)],
    exports: [RouterModule]
})
export class EmployeesRoutingModule { }
