import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-contact-component',
    template: `
      <h2>The Contact Component</h2>  
      <div>{{message}}</div>
      <br/>
      <a [routerLink]="['product']">Load Product Form</a>  
      <br/>
      <router-outlet></router-outlet>
    ` 
})
export class ContactComponent implements OnInit {
    message: string;
    constructor() { 
        this.message = 'This is the Home Component';
    }

    ngOnInit(): void { }
}