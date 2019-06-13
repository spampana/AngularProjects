import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductReceiverComponent } from './components/masterdetailscommunication/app.productreceiver.component';
import { CategorySenderComponent } from './components/masterdetailscommunication/app.categorysender.component';

@NgModule({
  declarations: [
    AppComponent,
    CategorySenderComponent,
    ProductReceiverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [CategorySenderComponent,ProductReceiverComponent]
})
export class AppModule { }
