import {Component, OnInit} from '@angular/core';
import {ServiceService} from "../service/service.service";

@Component({
  selector: 'app-header-log',
  standalone: true,
  imports: [],
  templateUrl: './header-log.component.html',
  styleUrl: './header-log.component.scss'
})
export class HeaderLogComponent implements OnInit{
  isDropdownOpen = false;
  userName: string = 'Nombre de usuario';

  constructor(private service: ServiceService) {}

  ngOnInit() {
    const user = this.service.getAuthenticatedUser();
    if (user) {
      this.userName = `${user.firstName} ${user.lastName}`;
    }
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
