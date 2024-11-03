import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info-evento',
  templateUrl: './info-evento.component.html',
  styleUrls: ['./info-evento.component.scss']
})
export class InfoEventoComponent implements OnInit {
  eventoId: string | null = null;
  evento: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.eventoId = this.route.snapshot.paramMap.get('id');
    console.log('Evento ID:', this.eventoId); // Verificar si el ID se captura correctamente
    this.loadEvento();
  }

  loadEvento() {
    const eventos = [
      { id: '1', nombre: 'Evento de IA Avanzada', fecha: '10 Nov 2024', lugar: 'Madrid, España', categoria: 'Inteligencia Artificial', precio: 'Gratis' },
      { id: '2', nombre: 'Conferencia de Ciberseguridad', fecha: '15 Nov 2024', lugar: 'Barcelona, España', categoria: 'Ciberseguridad', precio: '€50.00' },
    ];

    this.evento = eventos.find(e => e.id === this.eventoId);
    console.log('Evento encontrado:', this.evento); // Verificar si se encuentra el evento
  }
}
