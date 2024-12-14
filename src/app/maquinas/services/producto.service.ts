import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class ProductoService {

  private productos : Producto[]=[{
    id: 1,
    descripcion:'',
    nombre: 'coca-cola',
    precio: 100,
    cantidad: 10,
    fechavencimiento: new Date('1994-1-1')
  },{
    id: 2,
    descripcion:'',
    nombre: 'pepsi lata',
    precio: 120,
    cantidad: 10,
    fechavencimiento: new Date('1994-1-1')
  },{
    id: 3,
    descripcion:'',
    nombre: 'manaos',
    precio: 50,
    cantidad: 23,
    fechavencimiento: new Date('1994-1-1')
  }
  ]

  listproductos():Observable<Producto[]>{
    return of(this.productos)
  }

  constructor(private http: HttpClient) {}
}
