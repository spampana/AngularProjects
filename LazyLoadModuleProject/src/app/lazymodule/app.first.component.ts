import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-first-component',
    template: `
      <h1> The First Component </h1>
      <table class="table table-bordered table-striped">
        <thead>
          <tr>
             <td>id</td>
             <td>name</td>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let r of data">
            <td>{{r.id}}</td>
            <td>{{r.name}}</td>
          </tr>
        </tbody>
      </table>
      <br/>
      <a [routerLink]="['second']">Second</a>
      <br/>
      <router-outlet></router-outlet>
    `
})
export class FirstComponent implements OnInit {
    data: any;
    constructor() {
        this.data = [
            { id: 1, name: 'A' },
            { id: 2, name: 'A' },
            { id: 3, name: 'A' }
        ];
    }

    ngOnInit(): void { }
}