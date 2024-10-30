import { Routes } from '@angular/router';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { RecuperarContrasenaComponent } from './recuperar-contrasena/recuperar-contrasena.component';
import { RecuperarConstrasena2Component } from './recuperar-constrasena-2/recuperar-constrasena-2.component';
import { RecuperarContrasena3Component } from './recuperar-contrasena-3/recuperar-contrasena-3.component';
import { PrincipalComponent } from './principal/principal.component';

export const routes: Routes = [
    { path: '', redirectTo: 'principal', pathMatch: 'full' },
    { path: 'registro-usuario', component: RegistrarUsuarioComponent },
    { path: 'iniciar-sesion', component: IniciarSesionComponent },
    { path: 'recuperar-contraseña', component: RecuperarContrasenaComponent },
    { path: 'recuperar-contraseña-2', component: RecuperarConstrasena2Component },
    { path: 'recuperar-contraseña-3', component: RecuperarContrasena3Component },
    { path: 'principal', component: PrincipalComponent },
    { path: '**', redirectTo: 'principal'}
];


