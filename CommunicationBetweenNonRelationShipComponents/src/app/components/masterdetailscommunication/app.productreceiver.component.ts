import { Component, OnInit} from '@angular/core';
import { ProductInfo } from '../../models/app.product.model';
import { Products } from 'src/app/models/app.constants';
import { CommunicationService } from './../../services/app.communication.service';
@Component({
    selector: 'app-productreceiver-component',
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
    `
})
export class ProductReceiverComponent implements OnInit {
    prd: ProductInfo;
    prds = Products;

  

    CatName: string;
    private filterProducts: Array<ProductInfo>;
    constructor(private serv: CommunicationService) {
        this.prd = new ProductInfo(0, '', '', 0, '', '', '');
        this.CatName = '';
        this.filterProducts = new Array<ProductInfo>();
    }

    // subscribe to the event emitted from service
    // this will be one-time subscription    
    ngOnInit(): void {
      this.serv.onReceiveData.subscribe((param) => {
        this.CatName = param;
      });
    }

    get FilterProducts(): Array<ProductInfo> {
        this.filterProducts = new Array<ProductInfo>();
        if (this.CatName.length > 0) {
            this.filterProducts = this.prds.filter((v, i) => {
                return v.CategoryName === this.CatName;
            });
        } else {
            this.filterProducts = this.prds;
        }
        return this.filterProducts;
    }

   
}