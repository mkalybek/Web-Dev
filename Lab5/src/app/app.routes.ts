import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';

export const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' }, // Default route
  { path: 'products', component: ProductsComponent },
];
