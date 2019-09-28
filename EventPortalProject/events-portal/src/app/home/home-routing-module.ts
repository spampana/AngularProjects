import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SepHomeComponent} from './sep-home/sep-home.component'

const homeRoutes: Routes = [
{
    path:"",
    component:SepHomeComponent
}
];


@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
