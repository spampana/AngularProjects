import { Component, OnInit } from '@angular/core';
import { EventForm } from "../models/event-form";
import { EventsService } from '../services/events.service'

@Component({
  selector: 'register-event',
  templateUrl: './register-event.component.html',
  styleUrls: ['./register-event.component.css']
})
export class RegisterEventComponent implements OnInit {

  constructor(private _eventService:EventsService) { }
  title: string = "Register New Synchron Event";
  newEvent: EventForm = new EventForm();
  ngOnInit() {
  }

  onEventSubmit():void{
    this._eventService.insertNewEvent(this.newEvent.sepEventForm.value).subscribe(
      data=> console.log(data),
      error=>console.log(error)
      
      
    );
  }

}
