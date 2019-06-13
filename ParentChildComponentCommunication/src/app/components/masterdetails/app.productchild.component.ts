import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductInfo } from '../../models/app.product.model';
import { Products } from 'src/app/models/app.constants';

@Component({
    selector: 'app-productchild-component',
    template: `
    <h1>List of Products</h1>
      <table class="table table-bordered table-striped">
        <thead>
           <tr>
             <td>ProductRowId</td>
             <td>ProductId</td>
             <td>ProductName</td>
             <td>Price</td>
             <td>CategoryName</td>
             <td>Manufacturer</td>
             <td>Description</td>
           </tr>
        </thead>
        <tbody>
          <tr *ngFor="let p of FilterProducts">
            <td>{{p.ProductRowId}}</td>
            <td>{{p.ProductId}}</td>
            <td>{{p.ProductName}}</td>
            <td>{{p.Price}}</td>
            <td>{{p.CategoryName}}</td>
            <td>{{p.Manufacturer}}</td>
            <td>{{p.Description}}</td>
          </tr>
        </tbody>
      </table>
      <hr/>
      <input type="button" value="Notify" class="btn btn-warning" (click)="notifyBack()"/>
    `
})
export class ProductChildComponent implements OnInit {
    prd: ProductInfo;
    prds = Products;
   
    @Input()
    catName:string;
 
    @Output()
    onNotifyBack: EventEmitter<string>;

  

    private filterProducts: Array<ProductInfo>;
    constructor() {
        this.prd = new ProductInfo(0, '', '', 0, '', '', '');
        this.filterProducts = new Array<ProductInfo>();
        this.onNotifyBack = new EventEmitter<string>();
       // this.catName='';
    }



    ngOnInit(): void {
          console.log(this.catName);
    }

    get FilterProducts(): Array<ProductInfo> {
        this.filterProducts = new Array<ProductInfo>();
        if (this.catName.length > 0) {
            this.filterProducts = this.prds.filter((v, i) => {
                return v.CategoryName === this.catName;
            });
        } else {
            this.filterProducts = this.prds;
        }
        return this.filterProducts;
    }

    notifyBack(): void {
        this.onNotifyBack.emit(`We found ${this.filterProducts.length} records against CatName ${this.catName}`);
    }
}