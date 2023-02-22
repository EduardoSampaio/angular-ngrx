import { CategoryService } from './../../services/category.service';
import { Category } from '@shared/models/category.model';
import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit{

  displayedColumns: string[] = ['id', 'name', 'manager'];
  dataSource = new MatTableDataSource<Category>;

  constructor(private categoryService: CategoryService){}

  ngOnInit(): void {
    this.categoryService.listAll().subscribe((categories) => this.dataSource.data = categories)
  }
}
