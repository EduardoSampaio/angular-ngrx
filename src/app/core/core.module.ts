import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [HeaderComponent],
  declarations: [HeaderComponent],
  providers: [],
})
export class CoreModule {}
