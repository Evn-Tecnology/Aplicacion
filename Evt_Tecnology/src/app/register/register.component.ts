import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  standalone: true, // Esto lo hace standalone
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';

  onRegister() {
    console.log('Registering user with data:', {
      username: this.username,
      email: this.email,
      password: this.password
    });
    // Aquí podrías llamar a un servicio para hacer el registro real
  }
}
