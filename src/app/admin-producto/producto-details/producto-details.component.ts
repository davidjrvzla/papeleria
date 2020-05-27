import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-producto-details',
  templateUrl: './producto-details.component.html',
  styleUrls: ['./producto-details.component.css']
})
export class ProductoDetailsComponent implements OnInit {
  currentProducto = null;

  constructor(
    private productoService: ProductoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.getProducto(this.route.snapshot.paramMap.get('id'));
  }

  getProducto(id) {
    this.productoService.get(id)
      .subscribe(
        data => {
          this.currentProducto = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updatePublished(status) {
    const data = {
      nombre: this.currentProducto.nombre,
      precio: this.currentProducto.precio,
      published: status
    };

    this.productoService.update(this.currentProducto.id, data)
      .subscribe(
        response => {
          this.currentProducto.published = status;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  updateProducto() {
    this.productoService.update(this.currentProducto.id, this.currentProducto)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/admin/productos']);
        },
        error => {
          console.log(error);
        });
  }

  deleteProducto() {
    this.productoService.delete(this.currentProducto.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/admin/productos']);
        },
        error => {
          console.log(error);
        });
  }
  
}
