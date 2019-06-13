import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryParentComponent } from './components/masterdetails/app.categoryparent.component';
import { ProductChildComponent } from './components/masterdetails/app.productchild.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductChildComponent,
    CategoryParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    ],
  providers: [],
  bootstrap: [CategoryParentComponent]
})
export class AppModule { }
