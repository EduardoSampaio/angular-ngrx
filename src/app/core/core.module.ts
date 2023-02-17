import { LoggedinGuard } from './guards/loggein.guard';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { PermissionGuard } from './guards/permission.guard';

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [HeaderComponent],
  declarations: [HeaderComponent],
  providers: [LoggedinGuard, PermissionGuard],
})
export class CoreModule {}
