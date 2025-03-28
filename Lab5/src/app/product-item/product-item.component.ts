import { Component, Input, Output, EventEmitter } from "@angular/core";

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

@Component({
    selector: "app-product-item",
    templateUrl: "./product-item.component.html",
    styleUrls: ["./product-item.component.css"],
})
export class ProductItemComponent {
    @Input() product!: Product;
    @Output() remove: EventEmitter<number> = new EventEmitter<number>();

    like() {
        this.product.likes++;
    }

    removeItem() {
        this.remove.emit(this.product.id);
    }
}
