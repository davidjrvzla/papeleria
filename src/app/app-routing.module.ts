import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './services/auth-gaurd.service';
import { LoginGaurdService } from './services/login-gaurd.service';
import { returnHomeGaurdService } from './services/returnHome-gaurd.service';
import { ProductoGaurdService } from './services/producto-gaurd.service';
import { ProductosListComponent } from './admin-producto/productos-list/productos-list.component';
import { ProductoDetailsComponent } from './admin-producto/producto-details/producto-details.component';
import { AddProductoComponent } from './admin-producto/add-producto/add-producto.component';
import { ProductoListComponent } from './producto-list/producto-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent, canActivate:[LoginGaurdService] },
  { path: 'logout', component: LogoutComponent, canActivate:[AuthGaurdService] },
  { path: 'admin/productos', component: ProductosListComponent, canActivate:[AuthGaurdService] },
  { path: 'admin/producto/:id', component: ProductoDetailsComponent, canActivate:[AuthGaurdService] },
  { path: 'admin/add-producto', component: AddProductoComponent, canActivate:[AuthGaurdService] },
  { path: 'productos', component: ProductoListComponent, canActivate:[ProductoGaurdService] },
  { path: '**', component: HomeComponent, canActivate:[returnHomeGaurdService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
