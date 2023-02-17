import { LoggedinGuard } from '@core/guards/loggein.guard';
import { PermissionGuard } from '@core/guards/permission.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '@shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
    canActivate: [LoggedinGuard],
    canMatch: [PermissionGuard],
  },
  {
    path: 'category',
    loadChildren: () =>
      import('./modules/category/category.module').then(
        (m) => m.CategoryModule
      ),
    canActivate: [LoggedinGuard],
    canMatch: [PermissionGuard]
  },
  {
    path: 'product',
    loadChildren: () =>
      import('./modules/product/product.module').then((m) => m.ProductModule),
      canActivate: [LoggedinGuard],
      canMatch: [PermissionGuard]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
