import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Product } from '@shared/models/product.model';


@Injectable()
export class ProductService extends EntityCollectionServiceBase<Product> {

  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super("Product", serviceElementsFactory);
  }
}
