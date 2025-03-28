import { Component } from "@angular/core";

interface Product {
    id: number;
    name: string;
    description: string;
    rating: number;
    link: string;
    image: string;
    gallery?: string[];
    likes: number;
}

interface Category {
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
    categories: Category[] = [
        {
            id: 1,
            name: "Electronics",
            products: [
                {
                    id: 1,
                    name: "Apple iPhone 14",
                    description: "Latest smartphone",
                    rating: 4.5,
                    link: "https://kaspi.kz/shop/p/apple-iphone-14-128gb-blue-107116719/",
                    image: "assets/images/iphone14.jpg",
                    gallery: [
                        "assets/images/iphone14_1.jpg",
                        "assets/images/iphone14_2.jpg",
                        "assets/images/iphone14_3.jpg",
                    ],
                    likes: 0,
                },
                {
                    id: 2,
                    name: "Samsung Galaxy S22",
                    description: "Flagship smartphone",
                    rating: 4.3,
                    link: "https://kaspi.kz/shop/p/samsung-galaxy-s22-128gb-phantom-black-107116720/",
                    image: "assets/images/galaxy-s22.jpg",
                    gallery: [
                        "assets/images/galaxy-s22_1.jpg",
                        "assets/images/galaxy-s22_2.jpg",
                        "assets/images/galaxy-s22_3.jpg",
                    ],
                    likes: 0,
                },
                {
                    id: 3,
                    name: "Xiaomi Redmi Note 11",
                    description: "Affordable smartphone",
                    rating: 4.0,
                    link: "https://kaspi.kz/shop/p/xiaomi-redmi-note-11-64gb-black-107116721/",
                    image: "assets/images/redmi-note11.jpg",
                    gallery: [
                        "assets/images/redmi-note11_1.jpg",
                        "assets/images/redmi-note11_2.jpg",
                        "assets/images/redmi-note11_3.jpg",
                    ],
                    likes: 0,
                },
                {
                    id: 4,
                    name: "Sony WH-1000XM4",
                    description: "Noise cancelling headphones",
                    rating: 4.7,
                    link: "https://kaspi.kz/shop/p/sony-wh-1000xm4-headphones-107116724/",
                    image: "assets/images/sony-headphones.jpg",
                    gallery: [
                        "assets/images/sony-headphones_1.jpg",
                        "assets/images/sony-headphones_2.jpg",
                        "assets/images/sony-headphones_3.jpg",
                    ],
                    likes: 0,
                },
                {
                    id: 5,
                    name: 'Dell Monitor 24"',
                    description: "Crisp visuals",
                    rating: 4.4,
                    link: "https://kaspi.kz/shop/p/dell-monitor-24-inch-107116723/",
                    image: "assets/images/dell-monitor.jpg",
                    gallery: [
                        "assets/images/dell-monitor_1.jpg",
                        "assets/images/dell-monitor_2.jpg",
                        "assets/images/dell-monitor_3.jpg",
                    ],
                    likes: 0,
                },
            ],
        },
        {
            id: 2,
            name: "Fashion",
            products: [
                {
                    id: 6,
                    name: "Nike Running Shoes",
                    description: "Comfortable running shoes",
                    rating: 4.2,
                    link: "https://kaspi.kz/shop/p/nike-running-shoes-107116728/",
                    image: "assets/images/nike-shoes.jpg",
                    gallery: [
                        "assets/images/nike-shoes_1.jpg",
                        "assets/images/nike-shoes_2.jpg",
                        "assets/images/nike-shoes_3.jpg",
                    ],
                    likes: 0,
                },
                {
                    id: 7,
                    name: "Adidas T-Shirt",
                    description: "Sporty t-shirt",
                    rating: 4.1,
                    link: "https://kaspi.kz/shop/p/adidas-tshirt-107116729/",
                    image: "assets/images/adidas-tshirt.jpg",
                    gallery: [
                        "assets/images/adidas-tshirt_1.jpg",
                        "assets/images/adidas-tshirt_2.jpg",
                        "assets/images/adidas-tshirt_3.jpg",
                    ],
                    likes: 0,
                },
                {
                    id: 8,
                    name: "Levi’s Jeans",
                    description: "Classic denim",
                    rating: 4.3,
                    link: "https://kaspi.kz/shop/p/levis-jeans-107116730/",
                    image: "assets/images/levis-jeans.jpg",
                    gallery: [
                        "assets/images/levis-jeans_1.jpg",
                        "assets/images/levis-jeans_2.jpg",
                        "assets/images/levis-jeans_3.jpg",
                    ],
                    likes: 0,
                },
                {
                    id: 9,
                    name: "Gucci Belt",
                    description: "Luxury belt",
                    rating: 4.6,
                    link: "https://kaspi.kz/shop/p/gucci-belt-107116731/",
                    image: "assets/images/gucci-belt.jpg",
                    gallery: [
                        "assets/images/gucci-belt_1.jpg",
                        "assets/images/gucci-belt_2.jpg",
                        "assets/images/gucci-belt_3.jpg",
                    ],
                    likes: 0,
                },
                {
                    id: 10,
                    name: "Prada Sunglasses",
                    description: "Stylish sunglasses",
                    rating: 4.5,
                    link: "https://kaspi.kz/shop/p/prada-sunglasses-107116732/",
                    image: "assets/images/prada-sunglasses.jpg",
                    gallery: [
                        "assets/images/prada-sunglasses_1.jpg",
                        "assets/images/prada-sunglasses_2.jpg",
                        "assets/images/prada-sunglasses_3.jpg",
                    ],
                    likes: 0,
                },
            ],
        },
        {
            id: 3,
            name: "Home Appliances",
            products: [
                {
                    id: 11,
                    name: "LG Refrigerator",
                    description: "Energy efficient fridge",
                    rating: 4.3,
                    link: "https://kaspi.kz/shop/p/lg-refrigerator-107116726/",
                    image: "assets/images/lg-fridge.jpg",
                    gallery: [
                        "assets/images/lg-fridge_1.jpg",
                        "assets/images/lg-fridge_2.jpg",
                        "assets/images/lg-fridge_3.jpg",
                    ],
                    likes: 0,
                },
                {
                    id: 12,
                    name: "Samsung Washing Machine",
                    description: "Efficient washing machine",
                    rating: 4.4,
                    link: "https://kaspi.kz/shop/p/samsung-washing-machine-107116733/",
                    image: "assets/images/samsung-washing.jpg",
                    gallery: [
                        "assets/images/samsung-washing_1.jpg",
                        "assets/images/samsung-washing_2.jpg",
                        "assets/images/samsung-washing_3.jpg",
                    ],
                    likes: 0,
                },
                {
                    id: 13,
                    name: "Bosch Dishwasher",
                    description: "Modern dishwasher",
                    rating: 4.2,
                    link: "https://kaspi.kz/shop/p/bosch-dishwasher-107116734/",
                    image: "assets/images/bosch-dishwasher.jpg",
                    gallery: [
                        "assets/images/bosch-dishwasher_1.jpg",
                        "assets/images/bosch-dishwasher_2.jpg",
                        "assets/images/bosch-dishwasher_3.jpg",
                    ],
                    likes: 0,
                },
                {
                    id: 14,
                    name: "Philips Air Purifier",
                    description: "Clean air at home",
                    rating: 4.5,
                    link: "https://kaspi.kz/shop/p/philips-air-purifier-107116735/",
                    image: "assets/images/philips-air.jpg",
                    gallery: [
                        "assets/images/philips-air_1.jpg",
                        "assets/images/philips-air_2.jpg",
                        "assets/images/philips-air_3.jpg",
                    ],
                    likes: 0,
                },
                {
                    id: 15,
                    name: "Dyson Vacuum Cleaner",
                    description: "Powerful vacuum cleaner",
                    rating: 4.6,
                    link: "https://kaspi.kz/shop/p/dyson-vacuum-cleaner-107116736/",
                    image: "assets/images/dyson-vacuum.jpg",
                    gallery: [
                        "assets/images/dyson-vacuum_1.jpg",
                        "assets/images/dyson-vacuum_2.jpg",
                        "assets/images/dyson-vacuum_3.jpg",
                    ],
                    likes: 0,
                },
            ],
        },
        {
            id: 4,
            name: "Sports & Outdoors",
            products: [
                {
                    id: 16,
                    name: "Adidas Soccer Ball",
                    description: "Professional quality soccer ball",
                    rating: 4.4,
                    link: "https://kaspi.kz/shop/p/adidas-soccer-ball-107116737/",
                    image: "assets/images/soccer-ball.jpg",
                    gallery: [
                        "assets/images/soccer-ball_1.jpg",
                        "assets/images/soccer-ball_2.jpg",
                        "assets/images/soccer-ball_3.jpg",
                    ],
                    likes: 0,
                },
                {
                    id: 17,
                    name: "Wilson Tennis Racket",
                    description: "High-performance tennis racket",
                    rating: 4.3,
                    link: "https://kaspi.kz/shop/p/wilson-tennis-racket-107116738/",
                    image: "assets/images/tennis-racket.jpg",
                    gallery: [
                        "assets/images/tennis-racket_1.jpg",
                        "assets/images/tennis-racket_2.jpg",
                        "assets/images/tennis-racket_3.jpg",
                    ],
                    likes: 0,
                },
                {
                    id: 18,
                    name: "Puma Running Shoes",
                    description: "Lightweight running shoes",
                    rating: 4.2,
                    link: "https://kaspi.kz/shop/p/puma-running-shoes-107116739/",
                    image: "assets/images/puma-shoes.jpg",
                    gallery: [
                        "assets/images/puma-shoes_1.jpg",
                        "assets/images/puma-shoes_2.jpg",
                        "assets/images/puma-shoes_3.jpg",
                    ],
                    likes: 0,
                },
                {
                    id: 19,
                    name: "Under Armour Cap",
                    description: "Stylish sports cap",
                    rating: 4.0,
                    link: "https://kaspi.kz/shop/p/under-armour-cap-107116740/",
                    image: "assets/images/ua-cap.jpg",
                    gallery: [
                        "assets/images/ua-cap_1.jpg",
                        "assets/images/ua-cap_2.jpg",
                        "assets/images/ua-cap_3.jpg",
                    ],
                    likes: 0,
                },
                {
                    id: 20,
                    name: "Reebok Backpack",
                    description: "Durable and spacious",
                    rating: 4.1,
                    link: "https://kaspi.kz/shop/p/reebok-backpack-107116741/",
                    image: "assets/images/reebok-backpack.jpg",
                    gallery: [
                        "assets/images/reebok-backpack_1.jpg",
                        "assets/images/reebok-backpack_2.jpg",
                        "assets/images/reebok-backpack_3.jpg",
                    ],
                    likes: 0,
                },
            ],
        },
    ];

    selectedCategory: Category | null = null;

    selectCategory(category: Category) {
        this.selectedCategory = category;
    }

    removeProduct(productId: number) {
        if (this.selectedCategory) {
            this.selectedCategory.products =
                this.selectedCategory.products.filter(
                    (p) => p.id !== productId
                );
        }
    }
}
