import { LoggedinGuard } from './guards/loggein.guard';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { PermissionGuard } from './guards/permission.guard';
import { StoreModule } from '@ngrx/store';
import * as fromState from './states/reducers';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    StoreModule.forFeature(fromState.stateFeatureKey, fromState.reducers, { metaReducers: fromState.metaReducers })
  ],
  exports: [HeaderComponent, StoreModule],
  declarations: [HeaderComponent],
  providers: [LoggedinGuard, PermissionGuard],
})
export class CoreModule {}
