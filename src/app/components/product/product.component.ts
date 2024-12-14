import { Component } from '@angular/core';
import { Producto } from '../../maquinas/models/producto';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductoService } from '../../maquinas/services/producto.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
  
})

export class ProductComponent {
  listproducto : Producto[]= [];
  a:any; 
  producto: Producto= {
    id: 0,
    descripcion:'',
    nombre: '',
    precio: 0,
    cantidad: 0,
    fechavencimiento: new Date('1994-1-1')
  };

  constructor(private service: ProductoService){

  }

  ngOnInit(): void {
    this.service.listproductos().subscribe(listproducto=> this.listproducto = listproducto );
    console.log("En este instante el componente ha cargado" + this.listproducto);
    //console.log("En este instante el componente ha cargado" + this.maquina.id);
  }

}
