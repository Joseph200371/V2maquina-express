import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { MaquinaComponent } from './components/maquina/maquina.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { ResumenComponent } from './components/resumen/resumen.component';
import { MaterializeModule } from 'angular2-materialize';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MaquinaComponent,TopbarComponent,ResumenComponent,RouterModule, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Dashboard';
}
