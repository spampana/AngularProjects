import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { EventsListComponent } from './events-list/events-list.component';
import { EventsDetailsComponent } from './events-details/events-details.component';
import { EventsService } from './services/events.service';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { EventsRoutingModule } from './events-routing-module';
import { RegisterEventComponent } from './register-event/register-event.component';



@NgModule({
  declarations: [EventsListComponent, EventsDetailsComponent, RegisterEventComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule,
    EventsRoutingModule
  ],
  exports: [],
  providers: [
    EventsService // instance will be created automatically when registerd - singleton
  ]
})
export class EventsModule { }
