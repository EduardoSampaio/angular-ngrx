import { SharedModule } from '@shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './pages/category/category.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import * as from from './state/reducers';

const routes: Routes = [{ path: '', component: CategoryComponent }];

@NgModule({
  declarations: [CategoryComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule, StoreModule.forFeature(from.FeatureKey, from.reducers, { metaReducers: from.metaReducers })],
})
export class CategoryModule {}
