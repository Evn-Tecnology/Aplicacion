import { Component, OnInit } from '@angular/core';
import {HeaderLogComponent} from "../header-log/header-log.component";

@Component({
  selector: 'app-principal-logueado',
  standalone: true,
  imports: [HeaderLogComponent],
  templateUrl: './principal-logueado.component.html',
  styleUrl: './principal-logueado.component.scss'
})
export class PrincipalLogueadoComponent{
  isDropdownOpen = false;

  constructor() {}

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
