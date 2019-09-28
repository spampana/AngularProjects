import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{
   path:"",
   loadChildren:()=> import("./home/home.module").then(m=>m.HomeModule) //Lazy Loading, syntax from Angular8
},
{
  path:"home",
  loadChildren:()=> import("./home/home.module").then(m=>m.HomeModule) //Lazy Loading, syntax from Angular8

},
{
 path:"employees",
 loadChildren:()=>import("./employees/employees.module").then(e=>e.EmployeesModule)
},
{
  path:"events",
  loadChildren:()=>import("./events/events.module").then(e=>e.EventsModule)
},
{
  path:"jph",
  loadChildren:()=>import("./jph/jph.module").then(e=>e.JphModule)
}
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
