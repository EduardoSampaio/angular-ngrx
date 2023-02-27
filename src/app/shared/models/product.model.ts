import { Category } from './category.model';

export interface Product {
  name: string;
  price: number;
  category: Category
}
