import { ProductDataService } from './services/product-data.service';
import { ProductService } from './services/product.service';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './pages/product/product.component';
import { Routes, RouterModule } from '@angular/router';
import { EntityDataService, EntityDefinitionService, EntityMetadataMap } from '@ngrx/data';

const router: Routes = [
  {
    path: '',
    component: ProductComponent,
  },
];

const entityMetadata: EntityMetadataMap = {
  Product: {}
};


@NgModule({
  declarations: [ProductComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(router)],
  providers: [
    ProductService,
    ProductDataService
  ]
})
export class ProductModule {
  constructor(
    private eds: EntityDefinitionService,
    private entityDataService: EntityDataService,
    private productDataService :ProductDataService) {
      eds.registerMetadataMap(entityMetadata);
      entityDataService.registerService("Product", productDataService);
    }
}
