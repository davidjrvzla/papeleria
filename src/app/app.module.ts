import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ProductosListComponent } from './admin-producto/productos-list/productos-list.component';
import { ProductoDetailsComponent } from './admin-producto/producto-details/producto-details.component';
import { AddProductoComponent } from './admin-producto/add-producto/add-producto.component';
import { ProductoListComponent } from './producto-list/producto-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
	HomeComponent,
    LoginComponent,
    LogoutComponent,
	AddProductoComponent,
    ProductoDetailsComponent,
    ProductosListComponent,
    ProductoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
