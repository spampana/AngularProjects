import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
    providedIn:'root'
})
export class CommunicationService {
    // event that will be subscribed by all receivers
    onReceiveData: EventEmitter<string>;
    constructor() {
        this.onReceiveData = new EventEmitter<string>();
    }

    // method to be accessed by sender with input parameter
    // this parameter will be used as Event Parameter aka Payload
    // the method emits event with Payload
    // all active subscribers will be able to receive
    // the payload data
    receiveData(catName: string): void {
        this.onReceiveData.emit(catName);
    }
}