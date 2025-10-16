import { Routes } from '@angular/router';
import { Productos } from './components/productos/productos';
import { Login } from './components/login/login';
import { ProductoDetalle } from './components/producto-detalle/producto-detalle';
import { Home } from './components/home/home';

export const routes: Routes = [
    {path:'', redirectTo:'/listaProductos', pathMatch:'full'},
    {path:'home', component: Home},
    {path:'listaProductos', component: Productos},
    {path:'producto/:idProducto', component: ProductoDetalle },
    {path:'login', component: Login},
    {path:'**', redirectTo:'/login'}
];
