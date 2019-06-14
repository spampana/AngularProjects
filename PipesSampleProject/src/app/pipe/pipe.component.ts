import { Component, OnInit } from '@angular/core';
import { Category } from '../models/app.category.model';
import { ProductInfo } from '../models/app.product.model';

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

    products: Array<ProductInfo>;
    value: number;
    
    constructor() {
        this.name = 'Angular Pipe Examples.';
        this.datej = new Date(2019, 5, 14);
        this.salary = 120000;
        this.cat = new Category(101, 'Food');

        this.value = 0;
        this.products = new Array<ProductInfo>();
        this.products.push(new ProductInfo(1, 'Prd101', 'Laptop', 100000, 'Electronics', 'IBM', '64 GB'));
        this.products.push(new ProductInfo(2, 'Prd102', 'Iron', 1000, 'Electrical', 'Bajaj', 'Power Press'));
        this.products.push(new ProductInfo(3, 'Prd103', 'Desktop', 30000, 'Electronics', 'Lenovo', '4 GB'));
        this.products.push(new ProductInfo(4, 'Prd104', 'Cleaner', 6000, 'Electrical', 'TATA', 'Clean-booster'));
    }

    setValue(): void {
      this.value = 0;
  }

    ngOnInit(): void { }

}
