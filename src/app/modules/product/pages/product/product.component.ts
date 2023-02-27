import { ProductService } from './../../services/product.service';
import { Product } from '@shared/models/product.model';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  displayedColumns: string[] = ['name', 'category', 'price' , 'manager'];
  dataSource = new MatTableDataSource<Product>;
  loadProducts$: Observable<Product[]>;

  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.loadProducts$ = this.productService.entities$;
    this.loadProducts();
  }

  loadProducts(): void {
    this.loadProducts$ = this.productService.getAll();
    this.loadProducts$.subscribe((products) => {
      console.log(products);
      this.dataSource.data = products;
    });
  }
}
