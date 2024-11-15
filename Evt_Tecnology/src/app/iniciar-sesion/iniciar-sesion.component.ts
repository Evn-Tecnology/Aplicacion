import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatSnackBar, MatSnackBarModule } from "@angular/material/snack-bar";
import { MatButtonModule } from "@angular/material/button";
import { AuthRequest } from "../model/models";
import {ServiceService} from "../service/service.service";
import {HeaderNologComponent} from "../header-nolog/header-nolog.component";

@Component({
  selector: 'app-iniciar-sesion',
  standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatCardModule,
        MatSnackBarModule,
        MatButtonModule,
        RouterLink,
        HeaderNologComponent,
    ],
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.scss']
})
export class IniciarSesionComponent {

  loginForm: FormGroup;

  private fb = inject(FormBuilder);
  private authService = inject(ServiceService);
  private router = inject(Router);
  private snackBar = inject(MatSnackBar);

  constructor() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  controlHasError(control: string, error: string) {
    return this.loginForm.controls[control].hasError(error);
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    const authRequest: AuthRequest = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value
    };

    // Llama al servicio de autenticación para el login
    this.authService.login(authRequest).subscribe({
      next: (response) => {
        this.showSnackBar("Inicio de sesión exitoso");
        this.router.navigate(['/principal-logueado']);
      },
      error: (err) => {
        this.showSnackBar("Error en el inicio de sesión");
        console.error('Error en el inicio de sesión:', err);
      }
    });
  }

  private showSnackBar(message: string): void {
    this.snackBar.open(message, 'Cerrar', {
      duration: 2000,
      verticalPosition: 'top'
    });
  }
}
