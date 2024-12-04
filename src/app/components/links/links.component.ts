import { Component } from '@angular/core';
import { MPlink } from '../../maquinas/models/mplink';
import { EstadisticasService } from '../../maquinas/services/estadisticas.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-links',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './links.component.html',
  styleUrl: './links.component.css'
})
export class LinksComponent {
  listMPlink:MPlink[]=[];

  id;

  constructor(private service: EstadisticasService,private activatedRoute: ActivatedRoute){
    this.id = this.activatedRoute.snapshot.paramMap.get('id')|| "";
  }

  ngOnInit(): void {
    this.service.listMPLink(this.id).subscribe(listMPlink =>this.listMPlink=listMPlink);
  }
}
