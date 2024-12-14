import { RouterModule, Routes } from '@angular/router';
import { LogoComponent } from './components/logo/logo.component';
import { ResumenComponent } from './components/resumen/resumen.component';
import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductComponent } from './components/product/product.component';

export const routes: Routes = [
    {path : 'login', component: LoginComponent},
    {path : '', redirectTo: 'login', pathMatch:'full'},
    {
        path: 'dashboard', component : DashboardComponent, 
        children:[
            {path : '' , component : LogoComponent},
            {path : 'maquina/:id', component : ResumenComponent},
            {path : 'maquina/:id/producto', component : ProductComponent}
        ]
    }

    
];
