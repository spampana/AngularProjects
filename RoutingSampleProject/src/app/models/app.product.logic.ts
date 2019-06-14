import {ProductInfo} from './app.product.model';

export class ProductLogic {
    private products: Array<ProductInfo>;

    constructor() {
        this.products = new Array<ProductInfo>();
        this.products.push(new ProductInfo(1, 'Prd0001', 'Laptop', 123000, 'Electronics', 'IBM', 'ROG'));
        this.products.push(new ProductInfo(2, 'Prd0002', 'Desktop', 23000, 'Electronics', 'IBM', 'Developer'));
    }
    getProducts(): Array<ProductInfo> {
        return this.products;
    }
    
    saveProduct(prd: ProductInfo): Array<ProductInfo> {
        this.products.push(prd);
        return this.products;
    }
}