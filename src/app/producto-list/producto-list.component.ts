import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit {

  productos: any;
  currentProducto = null;
  currentIndex = -1;
  nombre = '';

  constructor(private productoService: ProductoService) { }

  ngOnInit() {
    this.retrieveProductos();
  }

  retrieveProductos() {
    this.productoService.getAll()
      .subscribe(
        data => {
          this.productos = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList() {
    this.retrieveProductos();
    this.currentProducto = null;
    this.currentIndex = -1;
  }

  setActiveProducto(producto, index) {
    this.currentProducto = producto;
    this.currentIndex = index;
  }

  searchNombre() {
    this.productoService.findByNombre(this.nombre)
      .subscribe(
        data => {
          this.productos = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  
}
