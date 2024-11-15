import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderNologComponent } from "../header-nolog/header-nolog.component";
import { EventService } from '../service/event.service';
import { EventResponse } from '../model/models';
import {HeaderLogComponent} from "../header-log/header-log.component";

@Component({
  selector: 'app-encontrar-eventos',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule, HeaderNologComponent, HeaderLogComponent],
  templateUrl: './encontrar-eventos.component.html',
  styleUrls: ['./encontrar-eventos.component.scss']
})
export class EncontrarEventosComponent implements OnInit {

  eventos: EventResponse[] = [];
  eventosFiltrados: EventResponse[] = [];
  categorias: string[] = [];
  searchTerm: string = '';

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.cargarEventos();
    this.cargarCategorias();
  }

  cargarEventos(): void {
    this.eventService.getEvents().subscribe(
      (response) => {
        this.eventos = response;
        this.eventosFiltrados = this.eventos;
      },
      (error) => {
        console.error('Error al obtener eventos:', error);
      }
    );
  }

  cargarCategorias(): void {
    this.eventService.getCategories().subscribe(
      (data: string[]) => {
        this.categorias = data;
      },
      (error) => {
        console.error('Error al obtener categorías:', error);
      }
    );
  }

  onSearch(): void {
    const term = this.searchTerm.toLowerCase();
    this.eventosFiltrados = this.eventos.filter(evento =>
      evento.event_nombre.toLowerCase().includes(term)
    );
  }

  aplicarFiltros(categoria: string[], precio: string[]): void {
    this.eventosFiltrados = this.eventos.filter(evento => {
      const coincideCategoria = categoria.length ? categoria.includes(evento.categoriaEvento.toLowerCase()) : true;
      const coincidePrecio = precio.length
        ? (precio.includes('gratis') && !evento.esPagado) || (precio.includes('pago') && evento.esPagado)
        : true;

      return coincideCategoria && coincidePrecio;
    });
  }
}
