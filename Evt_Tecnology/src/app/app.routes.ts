import { Routes } from '@angular/router';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { RecuperarContrasenaComponent } from './recuperar-contrasena/recuperar-contrasena.component';
import { PrincipalComponent } from './principal/principal.component';
import { CrearEventoComponent } from './crear-evento/crear-evento.component';
import { EncontrarEventosComponent } from './encontrar-eventos/encontrar-eventos.component';
import { InfoEventoComponent } from './info-evento/info-evento.component';
import {InscribirseEventoComponent} from "./inscribirse-evento/inscribirse-evento.component";
import {GestionarEventosComponent} from "./gestionar-eventos/gestionar-eventos.component";
import {PrincipalLogueadoComponent} from "./principal-logueado/principal-logueado.component";


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
    { path: 'inscribirse-evento', component: InscribirseEventoComponent },
  { path: 'gestionar-eventos', component: GestionarEventosComponent },
  { path: 'principal-logueado', component: PrincipalLogueadoComponent },
    { path: '**', redirectTo: 'principal'}
];


