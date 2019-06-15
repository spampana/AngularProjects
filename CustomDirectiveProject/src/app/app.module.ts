import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomDirectiveComponent } from './customdirectivecomponent/app.customdirective.component';
import { ColorDirective } from './directive/app.color.directive';

@NgModule({
  declarations: [
    CustomDirectiveComponent,
    ColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [CustomDirectiveComponent]
})
export class AppModule { }
