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
import {authenticatedGuard} from "./guards/authenticated.guard";
import {authGuard} from "./guards/auth.guard";



export const routes: Routes = [
    { path: '', redirectTo: 'principal', pathMatch: 'full' },
    { path: 'registro-usuario', component: RegistrarUsuarioComponent, canActivate:[authenticatedGuard] },
    { path: 'iniciar-sesion', component: IniciarSesionComponent, canActivate:[authenticatedGuard] },
    { path: 'recuperar-contraseña', component: RecuperarContrasenaComponent, canActivate:[authenticatedGuard] },
    { path: 'crear-evento', component: CrearEventoComponent, canActivate:[authGuard] },
    { path: 'encontrar-evento', component: EncontrarEventosComponent},
    { path: 'principal', component: PrincipalComponent, canActivate:[authenticatedGuard] },
    { path: 'info-evento', component: InfoEventoComponent},
    { path: 'inscribirse-evento', component: InscribirseEventoComponent },
    { path: 'gestionar-eventos', component: GestionarEventosComponent, canActivate:[authGuard]},
  { path: 'principal-logueado', component: PrincipalLogueadoComponent, canActivate:[authGuard] },
    { path: '**', redirectTo: 'principal'}
];


