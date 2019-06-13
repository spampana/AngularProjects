export class Category {
    constructor(
        public CatId: number,
        public CategoryName: string
    ) { }
}

export const CategoryData: Array<Category> = new Array<Category>();
CategoryData.push(new Category(1, 'Electronics'));
CategoryData.push(new Category(2, 'Electrical'));
CategoryData.push(new Category(3, 'Food'));