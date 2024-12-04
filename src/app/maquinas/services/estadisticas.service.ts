import { inject, Injectable } from '@angular/core';
import { Facturacion } from '../models/facturacion';
import { HttpClient } from '@angular/common/http';
import { MPlink } from '../models/mplink';

@Injectable({
  providedIn: 'root'
})
export class EstadisticasService {

  private http = inject(HttpClient);
  
  constructor() { }


  listFacturacion(id:any){
    console.log("pedi facturacion")
    return this.http.get<Facturacion[]>(`http://localhost:8090/api/history/maquina/${id}/facturacion/all`);
  }

  listMPLink(id:any){
    console.log("pedi link")
    return this.http.get<MPlink[]>(`http://localhost:8090/api/history/maquina/${id}/mplink/all`);
  }
}
