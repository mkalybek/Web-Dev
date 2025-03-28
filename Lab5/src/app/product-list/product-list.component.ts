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
    selector: "app-product-list",
    templateUrl: "./product-list.component.html",
    styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent {
    @Input() products: Product[] = [];
    @Output() remove: EventEmitter<number> = new EventEmitter<number>();

    onRemove(productId: number) {
        this.remove.emit(productId);
    }
}
