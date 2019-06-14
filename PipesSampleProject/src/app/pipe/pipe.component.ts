import { Component, OnInit } from '@angular/core';
import { Category } from '../models/app.category.model';

@Component({
  selector: 'app-pipe-component',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  name: string;
    datej: Date;
    salary: number;
    cat: Category;
    
    constructor() {
        this.name = 'Angular Pipe Examples.';
        this.datej = new Date(2019, 5, 14);
        this.salary = 120000;
        this.cat = new Category(101, 'Food');
    }

    ngOnInit(): void { }

}
