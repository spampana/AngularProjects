import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductInfo } from './../models/app.product.model';
import { Categories, Manufacturers } from './../models/app.constants';
import { ProductLogic } from './../models/app.product.logic';
import { MyValidator } from './app.custome.validator';
@Component({
    selector: 'app-productform-component',
    templateUrl: './app.productform.view.html'
})
export class ProductFormComponent implements OnInit {
    product: ProductInfo;
    private logic: ProductLogic;
    products: Array<ProductInfo>;
    categories = Categories;
    manufacturers = Manufacturers;
    tableColumns: Array<string>;
    frmGroup: FormGroup;
    constructor() {
        this.product = new ProductInfo(0, '', '', 0, '', '', '');
        this.logic = new ProductLogic();
        this.products = new Array<ProductInfo>();
        this.tableColumns = new Array<string>();

        // define an instance of FormGroup by linking the
        // Model properties i.e. ProductInfo with FormControl
        // and also define validations

        this.frmGroup = new FormGroup({
            ProductRowId: new FormControl(this.product.ProductRowId,
                Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(5), Validators.pattern('[0-9]+')])),
            ProductId: new FormControl(this.product.ProductId),
            ProductName: new FormControl(this.product.ProductName),
            Price: new FormControl(this.product.Price,
                Validators.compose([MyValidator.checkNegative])),
            CategoryName: new FormControl(this.product.CategoryName),
            Manufacturer: new FormControl(this.product.Manufacturer),
            Description: new FormControl(this.product.Description)
        });

    }
    // the methods will be called immediately after
    // ctor
    ngOnInit(): void {
        for (let p in this.product) {
            this.tableColumns.push(p);
        }
        this.products = this.logic.getProducts();
    }

    clear(): void {
        this.product = new ProductInfo(0, '', '', 0, '', '', '');
        this.frmGroup.reset();
    }
    save(): void {
        this.product = this.frmGroup.value;
        this.products = this.logic.saveProduct(this.product);
        console.log(JSON.stringify(this.products));
    }
    getSelectedProduct(p: ProductInfo): void {
        this.product = Object.assign({}, p);
        this.frmGroup.setValue(this.product);
    }
}