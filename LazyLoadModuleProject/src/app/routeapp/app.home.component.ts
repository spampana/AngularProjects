import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home-component',
    template: `
      <h2>The Home Component</h2>  
      <div>{{message}}</div>
    ` 
})
export class HomeComponent implements OnInit {
    message: string;
    constructor() { 
        this.message = 'This is the Home Component';
    }

    ngOnInit(): void { }
}