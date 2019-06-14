import { Component, OnInit } from '@angular/core';
import { ProductInfo } from './../models/app.product.model';
import { Categories, Manufacturers } from './../models/app.constants';
import { ProductLogic } from './../models/app.product.logic';
@Component({
    selector: 'app-product-component',
    templateUrl: './app.product.view.html'
})
export class ProductComponent implements OnInit {
    product: ProductInfo;
    private logic: ProductLogic;
    products: Array<ProductInfo>;
    categories =  Categories;
    manufacturers =  Manufacturers;
    tableColumns: Array<string>;
    constructor() {
        this.product = new ProductInfo(0, '', '', 0, '', '', '');
        this.logic = new ProductLogic();
        this.products = new Array<ProductInfo>();
        this.tableColumns = new Array<string>();
    }
    // the methods will be called immediately after
    // ctor
    ngOnInit(): void { 
        for(let p in this.product) {
            this.tableColumns.push(p);
        }
        this.products = this.logic.getProducts();
    }

    clear(): void {
        this.product = new ProductInfo(0, '', '', 0, '', '', '');
    }
    save(): void {
        this.products = this.logic.saveProduct(this.product);
        console.log(JSON.stringify(this.products));
    }
    getSelectedProduct(p: ProductInfo): void {
        this.product = Object.assign({},p);
    }
}