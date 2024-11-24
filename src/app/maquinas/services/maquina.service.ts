import { inject, Injectable } from '@angular/core';
import { Maquina } from '../models/maquina';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MaquinaService {
  [x: string]: any;

  private http = inject(HttpClient);

  private maquinas: Maquina[]=[
    {
      id:1,
      alias_name:"Arregui 524-1",
      descripcion:"maquina comidas organicas " ,
      modelo:"ABX 524",
      marca:"Philips",
      estado:"Encendida",
      url:"",
      tipo:'',
      colaMQ: '',
      productos: []
    },
    {
      id:2,
      alias_name:"Lincond 2547-1",
      descripcion:"maquina golosinas-galletitas-aperitivos" ,
      modelo:"ABX 524",
      marca:"Philips",
      estado:"Encendida",
      url:"",
      tipo:'',
      colaMQ: '',
      productos: []
    },
    {
      id:3,
      alias_name:"UADE 9-de-julio 3B",
      descripcion:"maquina bebidas lata" ,
      modelo:"C124 ",
      marca:"General Electric",
      estado:"Encendida",
      url:"",
      tipo:'',
      colaMQ: '',
      productos: []
    }

  ];


  constructor() { }
  //cambiar por url spring
  listmaquinas(): Observable<Maquina[]>{
    var lista : Maquina[]= [];
    this.maquinas.forEach(maquina => lista.push({
      id:maquina.id,
      alias_name:maquina.alias_name,
      descripcion:"",
      modelo:"",
      marca:"",
      estado:"",
      url:"",
      tipo:'',
      colaMQ: '',
      productos: []}));
    return of(lista);

    
  }

  findbyId(id:number): Observable<any>{ 
    var maquina=this.maquinas.find(maquina => maquina.id==id);
    return of(maquina);
  }

  
   

  findAll(){



    return this.http.get<Maquina[]>("http://localhost:8090/api/maquina/all");
  }
  

}
