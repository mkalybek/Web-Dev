import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface Product {
  name: string;
  description: string;
  rating: number;
  link: string;
  image: string;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  imports: [NgFor],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [
    {
      name: 'Apple iPhone 13',
      description: 'Смартфон Apple iPhone 13 128Gb черный',
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000',
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
    },
    {
      name: 'Samsung Galaxy S23',
      description: 'Смартфон Samsung Galaxy S23 Ultra 12 ГБ/256 ГБ черный',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-ultra-12-gb-256-gb-chernyi-109174566/?c=750000000',
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/h5e/h53/69635680763934.jpg?format=gallery-medium',
    },
    {
      name: 'Asus Zenbook Duo',
      description:
        'Ноутбук ASUS Zenbook Duo UX8406CA-QL078W 14" / 32 Гб / SSD 1024 Гб / Win 11 / 90NB14X1-M00320',
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/asus-zenbook-duo-ux8406ca-ql078w-14-32-gb-ssd-1024-gb-win-11-90nb14x1-m00320-134794129/?c=750000000',
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/pce/p6b/25150663.png?format=gallery-medium',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

interface Computer extends Product {
  model: string;
  name: string;
  cpu: number;
}
