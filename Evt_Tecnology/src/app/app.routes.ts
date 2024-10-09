import { Routes } from '@angular/router';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';

export const routes: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: 'registro-usuario', component: RegistrarUsuarioComponent },
    { path: '**', redirectTo: 'registro-usuario'}
];


