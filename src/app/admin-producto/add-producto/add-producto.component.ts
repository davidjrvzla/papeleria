import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-add-producto',
  templateUrl: './add-producto.component.html',
  styleUrls: ['./add-producto.component.css']
})
export class AddProductoComponent implements OnInit {
  producto = {
    nombre: '',
    precio: '',
    published: true
  };
  isSuccessful = false;
  isFailed = false;
  message = '';

  constructor(private productoService: ProductoService) { }

  ngOnInit() { }

  saveProducto() {
    const data = {
      nombre: this.producto.nombre,
      precio: this.producto.precio
    };

    this.productoService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.isSuccessful = true;
          this.producto = {nombre: '', precio: '', published: true};
          this.message = '¡El producto se registro correctamente!';
        },
        error => {
          console.log(error);
          this.isFailed = true;
          this.message = '.::ERROR IN SERVER::.'
        });
  }

  newProducto() {
    this.producto = {
      nombre: '',
      precio: '',
      published: true
    };
  }

}
