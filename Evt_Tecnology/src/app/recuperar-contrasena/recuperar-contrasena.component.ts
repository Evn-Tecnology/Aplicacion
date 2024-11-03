import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-recuperar-contrasena',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './recuperar-contrasena.component.html',
  styleUrl: './recuperar-contrasena.component.scss'
})
export class RecuperarContrasenaComponent {
  currentStep: number = 1; 


  nextStep() {
    if (this.currentStep < 3) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }
}