import { Routes } from '@angular/router';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';

export const routes: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: 'registro-usuario', component: RegistrarUsuarioComponent },
    { path: 'iniciar-sesion', component: IniciarSesionComponent },
    { path: '**', redirectTo: 'registro-usuario'}
];


