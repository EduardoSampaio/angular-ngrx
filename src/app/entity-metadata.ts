import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  Category: {},
};

const pluralNames = { Category: "Categories" };

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames,
};
