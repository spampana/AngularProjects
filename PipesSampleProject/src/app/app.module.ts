import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipeComponent } from './pipe/pipe.component';
import { ProductFilterPipe } from './pipe/app.cutompipe';

@NgModule({
  declarations: [
    AppComponent,
    PipeComponent,
    ProductFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [PipeComponent]
})
export class AppModule { }
