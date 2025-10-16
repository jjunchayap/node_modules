
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-productos',
  imports: [RouterLink],
  templateUrl: './productos.html',
  styleUrl: './productos.css'
})
export class Productos {
  productos = [
    { id: 1, nombre: 'Producto 1', precio: 100 },
    { id: 2, nombre: 'Producto 2', precio: 200 },
    { id: 3, nombre: 'Producto 3', precio: 300 },
    { id: 4, nombre: 'Producto 4', precio: 400 },
    { id: 5, nombre: 'Producto 5', precio: 500 }
  ]

}
