import {Product} from "./product.model";

export class SimpleDataSource {
    private data:Product[];

    constructor() {
        this.data = new Array<Product>(
        new Product(1, "TANAH", "Books", 275),
        new Product(2, "TEHILIM", "Books", 5),
        new Product(3, "Kidush Cup", "For Shabat", 199.50),
        new Product(4, "Nerot shel shabat", "For Shabat", 34.95),
        new Product(5, "Talit Gadol", "Talits", 299));
    }

    getData(): Product[] {
        return this.data;
    }
}
