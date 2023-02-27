import { Category } from '@shared/models/category.model';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';

@Injectable()
export class CategoryService extends EntityCollectionServiceBase<Category> {

  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super("Category", serviceElementsFactory);
  }
}
