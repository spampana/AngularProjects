import { Component,OnInit } from '@angular/core';
import { Event } from "../models/event";
import { EventsService } from "../services/events.service"

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css'],
  //providers:[EventsService] -> service available to this component and their child components only can use it.
})
export class EventsListComponent implements OnInit{


  constructor(private _eventService:EventsService) { }
  title: string = "Synechron Events";
  subTitle: string = "Global Events List";
  //selectedEvent: Event;
  searchChar: string = "";
  events: Event[] ;

  ngOnInit(): void {
    this._eventService.getAllEvents().subscribe(
    data => this.events = data,
    err => console.log(err)
    );
  }

  /*onEventSelection(event: Event): void {
    console.log("Selected event --" + event);
    this.selectedEvent = event;
  }*/


}
