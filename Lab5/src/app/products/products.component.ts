import { Component } from "@angular/core";
import { ProductListComponent } from "../product-list/product-list.component";

export interface Product {
    id: number;
    name: string;
    description: string;
    rating: number;
    link: string;
    image: string;
    likes: number;
}

export interface Category {
    id: number;
    name: string;
    products: Product[];
}

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
})
export class AppComponent {
    // Sample data for four categories with five products each.
    categories: Category[] = [
        {
            id: 1,
            name: "Smartphones",
            products: [
                {
                    id: 1,
                    name: "Apple iPhone 13",
                    description: "Смартфон Apple iPhone 13 128Gb черный",
                    rating: 5.0,
                    link: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000",
                    image: "https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium",
                    likes: 0,
                },
                {
                    id: 2,
                    name: "Samsung Galaxy S23",
                    description:
                        "Смартфон Samsung Galaxy S23 Ultra 12 ГБ/256 ГБ черный",
                    rating: 4.9,
                    link: "https://kaspi.kz/shop/p/samsung-galaxy-s23-ultra-12-gb-256-gb-chernyi-109174566/?c=750000000",
                    image: "https://resources.cdn-kaspi.kz/img/m/p/h5e/h53/69635680763934.jpg?format=gallery-medium",
                    likes: 0,
                },
                {
                    id: 3,
                    name: "Google Pixel 6",
                    description:
                        "Google Pixel 6 – чистый Android, отличная камера",
                    rating: 4.8,
                    link: "https://kaspi.kz/shop/p/google-pixel-6-128gb-chernyi-109174567/?c=750000000",
                    image: "https://resources.cdn-kaspi.kz/img/m/p/h32/h70/12345678901234.jpg?format=gallery-medium",
                    likes: 0,
                },
                {
                    id: 4,
                    name: "OnePlus 10 Pro",
                    description:
                        "OnePlus 10 Pro – высокопроизводительный смартфон",
                    rating: 4.7,
                    link: "https://kaspi.kz/shop/p/oneplus-10-pro-256gb-chernyi-109174568/?c=750000000",
                    image: "https://resources.cdn-kaspi.kz/img/m/p/h32/h70/23456789012345.jpg?format=gallery-medium",
                    likes: 0,
                },
                {
                    id: 5,
                    name: "Xiaomi Mi 11",
                    description: "Xiaomi Mi 11 – стильный и доступный смартфон",
                    rating: 4.6,
                    link: "https://kaspi.kz/shop/p/xiaomi-mi-11-128gb-chernyi-109174569/?c=750000000",
                    image: "https://resources.cdn-kaspi.kz/img/m/p/h32/h70/34567890123456.jpg?format=gallery-medium",
                    likes: 0,
                },
            ],
        },
        {
            id: 2,
            name: "Laptops",
            products: [
                // Add 5 laptop products with similar properties (including id and likes)
            ],
        },
        {
            id: 3,
            name: "Tablets",
            products: [
                // Add 5 tablet products with similar properties
            ],
        },
        {
            id: 4,
            name: "Accessories",
            products: [
                // Add 5 accessory products with similar properties
            ],
        },
    ];

    selectedCategory: Category | null = null;

    // Called when a category is selected from the UI.
    selectCategory(category: Category) {
        this.selectedCategory = category;
    }

    // Called when a product removal event is received.
    removeProduct(productId: number) {
        if (this.selectedCategory) {
            this.selectedCategory.products =
                this.selectedCategory.products.filter(
                    (p) => p.id !== productId
                );
        }
    }
}
