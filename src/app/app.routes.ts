import { RouterModule, Routes } from '@angular/router';
import { LogoComponent } from './components/logo/logo.component';
import { ResumenComponent } from './components/resumen/resumen.component';
import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductComponent } from './components/product/product.component';
import { authGuard } from './custom/auth.guard';
import { LinksComponent } from './components/links/links.component';
import { FacturacionComponent } from './components/facturacion/facturacion.component';
import { ConfiguracionComponent } from './components/configuracion/configuracion.component';

export const routes: Routes = [
    {path : 'login', component: LoginComponent},
    {path : '', redirectTo: 'login', pathMatch:'full'},
    {
        path: 'dashboard', component : DashboardComponent, 
        children:[
            {path : '' , component : LogoComponent,canActivate:[authGuard]},
            {path : 'maquina/:id', component : ResumenComponent,canActivate:[authGuard]},
            {path : 'maquina/:id/producto', component : ProductComponent,canActivate:[authGuard]},
            {path : 'maquina/:id/facturacion', component : FacturacionComponent,canActivate:[authGuard]},
            {path : 'maquina/:id/mplink', component : LinksComponent,canActivate:[authGuard]},
            {path : 'maquina/:id/configuracion', component : ConfiguracionComponent,canActivate:[authGuard]}
        ]
    }

    
];
