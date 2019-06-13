import { Component, OnInit } from '@angular/core';
import { Category, CategoryData } from '../../models/app.category.model';
import { CommunicationService } from './../../services/app.communication.service';

@Component({
    selector: 'app-categorysender-component',
    template: `
    <h1>List of Categories</h1>
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
    ` 
})
export class CategorySenderComponent implements OnInit {
    cat: Category;
    cats = CategoryData;
    constructor(private serve: CommunicationService) { 
        this.cat = new Category(0, '');
    }

    ngOnInit(): void { }

    getSelectedCategory(c: Category): void {
        this.cat = c;
        // sedn data to service
        this.serve.receiveData(this.cat.CategoryName);
    }
   
}