import { Component, inject } from '@angular/core';
import { Producto } from '../../maquinas/models/producto';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductoService } from '../../maquinas/services/producto.service';
import { Console } from 'console';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
  
})

export class ProductComponent {
  listproducto : Producto[]= [];
  a:any; 
  producto: Producto= {
    id: 0,
    descripcion:'',
    producto: '',
    precio: 0,
    cantidad: 0,
    fechavencimiento: new Date('1994-1-1'),
    imagen: ''
  };

  input: Producto= {
    id: 0,
    descripcion:'',
    producto: '',
    precio: 0,
    cantidad: 0,
    fechavencimiento: new Date('1994-1-1'),
    imagen: ''
  };
  image="assets/producto.jpg"

  Formproducto:string='';
  Formprecio:string='';
  Formcantidad:string='';
  Formfechavencimiento:string='';
  
  id;

  router = inject(Router);

  constructor(private service: ProductoService,private activatedRoute: ActivatedRoute){
    
    this.id = this.activatedRoute.snapshot.paramMap.get('id')|| "";
  }

  ngOnInit(): void {
    
    this.service.listproductos(this.id).subscribe(listproducto=> this.listproducto = listproducto );
    console.log("En este instante el componente ha cargado" + this.listproducto);
    //console.log("En este instante el componente ha cargado" + this.maquina.id);
  }


  onselectFile(e:any){
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload=(event:any) =>{
      this.image=event.target.result;
    }
  }

  submit(){
    //this.service.prueba();
    
    //console.log(this.activatedRoute.snapshot)
    let fecha = new Date();
    this.input.imagen=this.input.producto+fecha;
    this.input.producto=this.Formproducto;
    this.input.cantidad= Number(this.Formcantidad);
    this.input.precio= Number(this.Formprecio);
    this.input.fechavencimiento=new Date(this.Formfechavencimiento);
    //console.log(this.input)
    this.service.loadproducto(this.input,this.id).subscribe(Producto=>{
      
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/dashboard/maquina/'+this.id+'/producto'])});
    });
  }


}
