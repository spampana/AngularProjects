import { Component, OnInit } from '@angular/core';
import { Category, CategoryData } from './../../models/app.category.model';
@Component({
    selector: 'app-categoryparent-component',
    template: `
    <h1>List of Categories</h1>
    <div>{{message}}</div>
      <table class="table table-bordered table-striped">
        <thead>
           <tr>
             <td>CatId</td>
             <td>CategoryName</td>
           </tr>
        </thead>
        <tbody>
          <tr *ngFor="let c of cats" (click)="getSelectedCategory(c)">
            <td>{{c.CatId}}</td>
            <td>{{c.CategoryName}}</td>
          </tr>
        </tbody>
      </table>
      <br>
      <app-productchild-component [catName]="cat.CategoryName"
       (onNotifyBack)="GetNotification($event)" ></app-productchild-component>
    ` 
})
export class CategoryParentComponent implements OnInit {
    cat: Category;
    cats = CategoryData;
    message: string;
    constructor() { 
        this.cat = new Category(0, '');
        this.message = '';
    }

    ngOnInit(): void { }

    getSelectedCategory(c: Category): void {
        this.cat = c;
    }
    GetNotification($event): void {
        this.message = $event;
    }
}