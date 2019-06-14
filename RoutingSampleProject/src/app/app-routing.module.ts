import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './routeapp/app.home.component';
import { AboutComponent } from './routeapp/app.about.component';
import { ContactComponent } from './routeapp/app.contact.component';
import { ProductComponent } from './productcomponent/app.product.component';
// the route table
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about/:id', component: AboutComponent },
  {
    path: 'contact', component: ContactComponent,
    children: [
      { path: 'product', component: ProductComponent }
    ]
  }
];

@NgModule({
  // forRoot() method register the route table for root module
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }