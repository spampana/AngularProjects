export class ProductInfo {
    constructor(
        public ProductRowId: number,
        public ProductId: string,
        public ProductName: string,
        public Price: number,
        public CategoryName: string,
        public Manufacturer: string,
        public Description: string
    ) {}
}