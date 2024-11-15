import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {HeaderNologComponent} from "../header-nolog/header-nolog.component"; // Importa CommonModule

@Component({
  selector: 'app-encontrar-eventos',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule, HeaderNologComponent,],
  templateUrl: './encontrar-eventos.component.html',
  styleUrls: ['./encontrar-eventos.component.scss']
})
export class EncontrarEventosComponent {
  eventos = [
    { id: '1', nombre: 'Evento de IA Avanzada', fecha: '10 Nov 2024', lugar: 'Madrid, España', categoria: 'Inteligencia Artificial', precio: 'Gratis' },
    { id: '2', nombre: 'Conferencia de Ciberseguridad', fecha: '15 Nov 2024', lugar: 'Barcelona, España', categoria: 'Ciberseguridad', precio: '€50.00' },
    // otros eventos con sus respectivos ids...
  ];

  eventosFiltrados = this.eventos;

  onSearch(form: any) {
    const termino = form.value.searchTerm.toLowerCase();
    this.eventosFiltrados = this.eventos.filter(evento =>
      evento.nombre.toLowerCase().includes(termino) ||
      evento.categoria.toLowerCase().includes(termino) ||
      evento.lugar.toLowerCase().includes(termino)
    );
  }
}
