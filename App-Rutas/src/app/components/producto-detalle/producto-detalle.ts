import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-producto-detalle',
  imports: [],
  templateUrl: './producto-detalle.html',
  styleUrl: './producto-detalle.css'
})
export class ProductoDetalle implements OnInit {

  productID: string = '';
  producto: any = null;

  productos = [
{    id: 1, nombre: 'Producto 1', precio: 100, descripcion: 'Descripción del Producto 1'},
{    id: 2, nombre: 'Producto 2', precio: 200, descripcion: 'Descripción del Producto 2'},
{    id: 3, nombre: 'Producto 3', precio: 300,  descripcion: 'Descripción del Producto 3'},
{    id: 4, nombre: 'Producto 4', precio: 400,  descripcion: 'Descripción del Producto 4'},
{    id: 5, nombre: 'Producto 5', precio: 500, descripcion: 'Descripción del Producto 5'}

  ]

  constructor(private route: ActivatedRoute,
              private router: Router
  ){
  }
  ngOnInit(): void {
    this.productID =  this.route.snapshot.paramMap.get('idProducto') || '';
    this.buscarProducto();
  }

  buscarProducto(){
    const id = parseInt(this.productID);
    this.producto = this.productos.find(p=>p.id == id);
  }

  volver(){
    this.router.navigate(['/listaProductos']);
  }

}
