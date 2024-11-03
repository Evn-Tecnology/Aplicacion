import { Routes } from '@angular/router';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { RecuperarContrasenaComponent } from './recuperar-contrasena/recuperar-contrasena.component';
import { PrincipalComponent } from './principal/principal.component';
import { CrearEventoComponent } from './crear-evento/crear-evento.component';
import { EncontrarEventosComponent } from './encontrar-eventos/encontrar-eventos.component';
import { InfoEventoComponent } from './info-evento/info-evento.component';

export const routes: Routes = [
    { path: '', redirectTo: 'principal', pathMatch: 'full' },
    { path: 'registro-usuario', component: RegistrarUsuarioComponent },
    { path: 'iniciar-sesion', component: IniciarSesionComponent },
    { path: 'recuperar-contraseña', component: RecuperarContrasenaComponent },
    { path: 'crear-evento', component: CrearEventoComponent },
    { path: 'encontrar-evento', component: EncontrarEventosComponent},
    { path: 'principal', component: PrincipalComponent },
    { path: 'info-evento', component: InfoEventoComponent},
    { path: 'info-evento/:id', component: InfoEventoComponent },
    { path: '**', redirectTo: 'principal'}
];


