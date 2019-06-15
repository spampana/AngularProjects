import { Component, OnInit } from '@angular/core';
import { Categories, Manufacturers } from '../models/app.constants';
import { ProductDataInfo } from '../../lib/sharedmodule/app.product.model';
import { SharedHttpService } from './../../lib/sharedmodule/services/app.shared.service';
@Component({
    selector: 'app-productservice-component',
    templateUrl: './app.productservice.view.html'
})
export class ProductServiceComponent implements OnInit {
    product: ProductDataInfo;
    products: Array<ProductDataInfo>;
    categories = Categories;
    manufacturers = Manufacturers;
    tableColumns: Array<string>;

    constructor(private serv: SharedHttpService) {
        this.product = new ProductDataInfo(0, '', '', 0, '', '', '');
        this.products = new Array<ProductDataInfo>();
        this.tableColumns = new Array<string>();
    }
    // the methods will be called immediately after constructor
    ngOnInit(): void {
        for (let p in this.product) {
            this.tableColumns.push(p);
        }

        this.loadData();
    }

    // the method to subscribe to the getProducts() method from injected service
    private loadData(): void {
        // the subscription to an Observable<ProductDataInfo[]> will respond the ProductDataInfo[]
        this.serv.getProducts().subscribe((response) => {
            this.products = response;
        });
    }

    clear(): void {
        this.product = new ProductDataInfo(0, '', '', 0, '', '', '');
    }
    save(): void {
        this.serv.postProduct(this.product).subscribe((response) => {
            this.product = response;
            this.products.push(this.product);
        });
    }

    update(): void {
        this.serv.putProduct(this.product.ProductRowId, this.product).subscribe((response) => {
            console.log(response);
        })
    }

    delete(): void {
        this.serv.deleteProduct(this.product.ProductRowId);
    }

    getSelectedProduct(p: ProductDataInfo): void {
        this.product = Object.assign({}, p);
    }
}