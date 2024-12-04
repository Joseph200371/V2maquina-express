import { Component } from '@angular/core';
import { EstadisticasService } from '../../maquinas/services/estadisticas.service';
import { Facturacion } from '../../maquinas/models/facturacion';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-facturacion',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './facturacion.component.html',
  styleUrl: './facturacion.component.css'
})
export class FacturacionComponent {
  listFacturacion:Facturacion[]=[];

  id;

  constructor(private service: EstadisticasService,private activatedRoute: ActivatedRoute){
    this.id = this.activatedRoute.snapshot.paramMap.get('id')|| "";
  }

  ngOnInit(): void {
    this.service.listFacturacion(this.id).subscribe(listFacturacion =>this.listFacturacion=listFacturacion);
  }

}
