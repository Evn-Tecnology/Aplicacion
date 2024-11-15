import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-header-nolog',
  standalone: true,
    imports: [
        RouterLink
    ],
  templateUrl: './header-nolog.component.html',
  styleUrl: './header-nolog.component.scss'
})
export class HeaderNologComponent {

}
