import { selectCategoriesList } from './../../state/selectors/category.selectors';
import { addNewCategory, loadCategories, removeCategory, updateCategory } from './../../state/action/crud-category.actions';
import { CategoryState } from './../../state/reducers/index';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ConfirmDialogComponent, ConfirmDialogModel } from '@shared/components/confirm-dialog/confirm-dialog.component';
import { CategoryService } from './../../services/category.service';
import { Category } from '@shared/models/category.model';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ModalDialogComponent } from '@modules/category/components/modal-dialog/modal-dialog.component';
import { Guid } from 'guid-typescript';



@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['id', 'name', 'manager'];
  dataSource = new MatTableDataSource<Category>;
  loadCategories$: Observable<Category[]> = this.store.select(selectCategoriesList);


  constructor(
    private dialog: MatDialog,
    private store: Store<CategoryState>) { }


  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.loadCategories$.subscribe((categories) => {
      if (categories !== undefined) {
        this.dataSource.data = categories
        console.log(categories);
      }
    });
  }


  confirmDialog(category: Category): void {
    const message = `Are you sure you want to do this?`;

    const dialogData = new ConfirmDialogModel("Confirm Action", message);

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        this.store.dispatch(removeCategory({data: category}));
      }
    });
  }

  dialogEdit(category: Category) {
    const valueData: Category = {
      id: category.id,
      name: category.name
    };

    const dialogRef = this.dialog.open(ModalDialogComponent, {
      maxWidth: "400px",
      data: valueData
    });

    dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        this.store.dispatch(updateCategory({data}));
      }
    })
  }

  addNewCategory(): void {
    const dialogRef = this.dialog.open(ModalDialogComponent, {
      maxWidth: "400px",
      data: {}
    });

    dialogRef.afterClosed().subscribe((data) => {
      if (data !== null && data !== undefined) {
        data.id = Guid.create().toString();
        this.store.dispatch(addNewCategory({data}))
      }
    })
  }
}


