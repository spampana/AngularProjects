import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './routeapp/app.home.component';
import { ContactComponent } from './routeapp/app.contact.component';
import { AboutComponent} from './routeapp/app.about.component';
import { ProductComponent} from './productcomponent/app.product.component';

// the route table
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about/:id', component: AboutComponent },
  {
    path: 'contact', component: ContactComponent,
    children: [
      { path: 'product', component: ProductComponent }
    ]
  },
  { path: 'lazy', loadChildren: './lazymodule/app.lazy.module#LazyModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
