import { ProductInfo } from './app.product.model';

export const Categories = ['Electronics', 'Electrical', 'Food'];

export const Manufacturers = [
    'IBM',
    'BAJAJ', 
    'TATA',
    'PARLE'
];

export const Products: Array<ProductInfo> = new Array<ProductInfo>();
Products.push(new ProductInfo(1, 'Prd0001', 'Laptop', 123000, 'Electronics', 'IBM', 'ROG'));
Products.push(new ProductInfo(2, 'Prd0002', 'Desktop', 23000, 'Electronics', 'IBM', 'Developer'));
Products.push(new ProductInfo(3, 'Prd0003', 'Iron', 1230, 'Electrical', 'TATA', 'Power Press'));
Products.push(new ProductInfo(4, 'Prd0004', 'Mixer', 3000, 'Electrical', 'BAJAJ', 'Material Mixing'));
Products.push(new ProductInfo(5, 'Prd0005', 'Lays', 20, 'Food', 'PARLE', 'Energy Food'));
Products.push(new ProductInfo(6, 'Prd0006', 'Burger', 300, 'Food', 'PARLE', 'Fatty Food'));