import { Component, inject, OnInit } from '@angular/core';
import { HeaderLogComponent } from "../header-log/header-log.component";
import { EventService } from "../service/event.service";
import { EventResponse } from "../model/models";
import {CommonModule, DatePipe} from "@angular/common";

@Component({
  selector: 'app-gestionar-eventos',
  standalone: true,
  imports: [
    HeaderLogComponent,
    DatePipe,
    CommonModule
  ],
  templateUrl: './gestionar-eventos.component.html',
  styleUrls: ['./gestionar-eventos.component.css']
})
export class GestionarEventosComponent implements OnInit {

  events: EventResponse[] = []; // Asegúrate de inicializarlo como un array vacío

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents(): void {
    this.eventService.getEvents().subscribe(
      (response) => {
        this.events = response;
      },
      (error) => {
        console.error('Error al obtener eventos:', error);
      }
    );
  }

  deleteEvent(eventId: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este evento?')) {
      this.eventService.deleteEvent(eventId).subscribe(
        () => {
          this.events = this.events.filter(event => event.id !== eventId);
          alert('Evento eliminado con éxito');
        },
        (error) => {
          console.error('Error al eliminar el evento:', error);
          alert('Hubo un problema al eliminar el evento');
        }
      );
    }
  }
}
