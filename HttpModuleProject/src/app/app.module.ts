import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from 'src/lib/sharedmodule/sharedmodule.module';
import { ProductServiceComponent } from './productservicecomponent/app.productservice.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [ProductServiceComponent]
})
export class AppModule { }
