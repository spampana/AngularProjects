import { Injectable } from '@angular/core';
import { Event } from '../models/event'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable(
  /*{
  providedIn: 'root' -> registers its with root module automatically
  }*/
)
export class EventsService {

  constructor(private _httpService: HttpClient) { }

  private _eventsData: Event[] = [
    /* {
       eventId: 1001,
       eventCode: 'SEMJQ3',
       eventName: 'Seminar on jQuery 3.x',
       description: 'Seminar will discuss all the new features of jQuery 3.x',
       startDate: new Date(),
       endDate: new Date(),
       fees: 800,
       seatsFilled: 70,
       logo: 'images/jq3.png'
     },
     {
       eventId: 1002,
       eventCode: 'SEMNG1',
       eventName: 'Seminar on Angular JS 1.5.x',
       description: 'Seminar will discuss all the new features of Angular JS 1.5.x',
       startDate: new Date(),
       endDate: new Date(),
       fees: 600,
       seatsFilled: 50,
       logo: 'images/ng1.png'
     },
     {
       eventId: 1003,
       eventCode: 'SEMNG2',
       eventName: 'Seminar on Angular 2.x',
       description: 'Seminar will discuss all the new features of Angular 2.x',
       startDate: new Date(),
       endDate: new Date(),
       fees: 1000,
       seatsFilled: 80,
       logo: 'images/ng2.png'
     },
     {
       eventId: 1004,
       eventCode: 'SEMNG4',
       eventName: 'Seminar on Angular 4.x',
       description: 'Seminar will discuss all the new features of Angular 4.x',
       startDate: new Date(),
       endDate: new Date(),
       fees: 1000,
       seatsFilled: 76,
       logo: 'images/ng2.png'
     },
     {
       eventId: 1005,
       eventCode: 'SEMBS3',
       eventName: 'Seminar on Bootstrap 3.x',
       description: 'Seminar will discuss all the new features of Bootstrap 3.x',
       startDate: new Date(),
       endDate: new Date(),
       fees: 500,
       seatsFilled: 34,
       logo: 'images/bs3.png'
     }*/
  ];

  public getAllEvents(): Observable<Event[]> {
    return this._httpService.get<Event[]>("http://localhost:9090/api/events");
  }

  public getEventById(id: number): Observable<Event> {
    return this._httpService.get<Event>(`http://localhost:9090/api/events/${id}`);
  }

  public insertNewEvent(event: Event): Observable<Event> {
    return this._httpService.post<Event>("http://localhost:9090/api/events", event, {
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
}
