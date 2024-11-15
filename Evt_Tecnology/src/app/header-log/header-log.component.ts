import {Component, OnInit} from '@angular/core';
import {ServiceService} from "../service/service.service";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-header-log',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './header-log.component.html',
  styleUrl: './header-log.component.scss'
})
export class HeaderLogComponent implements OnInit {
  isDropdownOpen = false;
  userName: string = 'Nombre de usuario';

  constructor(private service: ServiceService, private serviceService: ServiceService, private router: Router) {
  }

  ngOnInit() {
    const user = this.service.getAuthenticatedUser();
    if (user) {
      this.userName = `${user.firstName} ${user.lastName}`;
    }
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }


  logout(): void {
    this.serviceService.logout(); // Limpia los datos de autenticación
    this.router.navigate(['/iniciar-sesion']); // Redirige a la página de inicio de sesión
  }
}




