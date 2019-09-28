import { Component, Input, OnInit } from '@angular/core';
import { Event } from "../models/event";
import { EventsService } from '../services/events.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'events-details',
  templateUrl: './events-details.component.html',
  styleUrls: ['./events-details.component.css']
})
export class EventsDetailsComponent implements OnInit {

  constructor(private _eventsService: EventsService, private _activatedRoute: ActivatedRoute) { }

  title: string = "Details of -";
  //@Input() event: Event;
  event: Event;

  ngOnInit(): void {
    this._eventsService.getEventById(Number.parseInt(this._activatedRoute.snapshot.paramMap.get("id"))).subscribe(
      data => this.event = data,
      error => console.log(error)
    )
  }

}
