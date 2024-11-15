import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatSnackBar, MatSnackBarModule } from "@angular/material/snack-bar";
import { CommonModule } from "@angular/common";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import {ServiceService} from "../service/service.service";
import {HeaderNologComponent} from "../header-nolog/header-nolog.component";

@Component({
  selector: 'app-registrar-usuario',
  standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatCardModule,
        MatSnackBarModule,
        MatButtonModule,
        MatFormFieldModule,
        RouterLink,
        HeaderNologComponent
    ],
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.scss'] // Cambiado a styleUrls
})
export class RegistrarUsuarioComponent {
  registerForm: FormGroup;

  private fb = inject(FormBuilder);
  private authService = inject(ServiceService);
  private router = inject(Router);
  private snackBar = inject(MatSnackBar);

  constructor() {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      telefono: ['', [
        Validators.required,
        this.telefonoValidator // Validación personalizada para el teléfono
      ]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20),
        Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&+=]).*$')
      ]],
      ConfirmPassword: ['', Validators.required]
    }, { validators: this.passwordsMatchValidator });
  }

  controlHasError(controlName: string, errorName: string) {
    return this.registerForm.get(controlName)?.hasError(errorName);
  }

  passwordsMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('ConfirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  telefonoValidator(control: any) {
    const telefonoRegex = /^[+]?[0-9][\d\s\-\(\)]*$/;
    if (control.value && !telefonoRegex.test(control.value)) {
      return { invalidTelefono: true };
    }
    return null;
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }

    // Preparar los datos para enviarlos al backend
    const userData = {
      firstName: this.registerForm.get('firstName')?.value,
      lastName: this.registerForm.get('lastName')?.value,
      telefono: this.registerForm.get('telefono')?.value,
      email: this.registerForm.get('email')?.value,
      password: this.registerForm.get('password')?.value
    };
    // Verifica los datos antes de enviar
    console.log("Datos enviados al backend:", userData);

    // Llamada al servicio de autenticación para registrar el usuario
    this.authService.register(userData).subscribe({
      next: () => {
        this.showSnackBar("Registro exitoso");
        this.router.navigate(['/auth/login']); // Redireccionar después del registro
      },
      error: (err) => {
        this.showSnackBar("Error en el registro");
        console.error('Error en el registro:', err);
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
