import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path: 'home',
    canActivate: [loginGuard],
    loadComponent: () =>
      import('./components/home/home.component').then((x) => x.HomeComponent),
  },
  {
    path: 'compras',
    canActivate: [loginGuard],
    loadComponent: () =>
      import('./components/compras/compras.component').then((x) => x.ComprasComponent),
  },
  {
    path: 'ventas',
    canActivate: [loginGuard],
    loadComponent: () =>
      import('./components/ventas/ventas.component').then((x) => x.VentasComponent),
  },
  {
    path: '**',
    canActivate: [loginGuard],
    loadComponent: () =>
    import('./components/home/home.component').then((x) => x.HomeComponent),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
