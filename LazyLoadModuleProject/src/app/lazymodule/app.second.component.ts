import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-second-component',
    template: `
      <h1> The Second Component </h1>
      <table class="table table-bordered table-striped">
        <thead>
          <tr>
             <td>id</td>
             <td>name</td>
             <td>age</td>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let r of data">
            <td>{{r.id}}</td>
            <td>{{r.name}}</td>
            <td>{{r.age}}</td>
          </tr>
        </tbody>
      </table>
    `
})
export class SecondComponent implements OnInit {
    data: any;
    constructor() {
        this.data = [
            { id: 1, name: 'A', age: 20 },
            { id: 2, name: 'A', age: 30 },
            { id: 3, name: 'A', age: 40 }
        ];
    }

    ngOnInit(): void { }
}