import { CategoryDataService } from '@modules/category/services/category-data.service';
import { DefaultDataServiceConfig, EntityDefinitionService, EntityMetadataMap, EntityDataModule, HttpUrlGenerator, EntityDataService } from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from '@shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './pages/category/category.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import * as from from './state/reducers';
import { CategoryEffects } from './state/effects/category.effects';
import { CategoryResolver } from './state/category.resolver';
import { CategoryService } from './services/category.service';


const routes: Routes = [{ path: '', component: CategoryComponent, resolve: { categories: CategoryResolver } }];

const entityMetadata: EntityMetadataMap = {
  Category: {

  }
};

@NgModule({
  declarations: [CategoryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    StoreModule.forFeature(from.FeatureKey, from.reducer),
    EffectsModule.forFeature([CategoryEffects])
  ],
  providers: [CategoryResolver, CategoryService , CategoryDataService]
})
export class CategoryModule {
  constructor(private eds: EntityDefinitionService,
    private entityDataService: EntityDataService,
    private categoryDataService: CategoryDataService) {
    eds.registerMetadataMap(entityMetadata);
    entityDataService.registerService("Category", categoryDataService);
  }
}
