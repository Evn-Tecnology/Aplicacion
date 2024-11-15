import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EventService } from '../service/event.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { ServiceService } from "../service/service.service";
import { HeaderLogComponent } from "../header-log/header-log.component";

@Component({
  selector: 'app-crear-evento',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, ReactiveFormsModule, HeaderLogComponent],
  templateUrl: './crear-evento.component.html',
  styleUrls: ['./crear-evento.component.css'],
})
export class CrearEventoComponent implements OnInit {
  createEventForm: FormGroup;
  isPaid: boolean = false;
  categories: string[] = [];
  organizadorId: number | null = null;  // Variable para almacenar el ID del usuario logueado

  constructor(
    private fb: FormBuilder,
    private eventService: EventService,
    private router: Router,
    private service: ServiceService
  ) {
    this.createEventForm = this.fb.group({
      eventNombre: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      eventDescripcion: ['', Validators.required],
      eventFecha: ['', Validators.required],
      eventFechaFin: ['', Validators.required],
      eventHora: ['', Validators.required],
      eventLugar: ['', Validators.required],
      categoriaEvento: ['', Validators.required],
      tipoEvento: ['', Validators.required],
      esPagado: [false],
      precio: [{ value: null, disabled: true }],
      capacidad: ['', [Validators.required, Validators.min(1)]]
    });
  }

  onPriceTypeChange(isPaid: boolean) {
    this.isPaid = isPaid;
    if (isPaid) {
      this.createEventForm.controls['precio'].enable();
    } else {
      this.createEventForm.controls['precio'].disable();
      this.createEventForm.controls['precio'].setValue(null);
    }
  }

  onSubmit() {
    if (this.createEventForm.invalid) {
      alert('Por favor, complete todos los campos requeridos.');
      return;
    }

    if (!this.organizadorId) {
      alert('No se pudo obtener la información del usuario. Inicie sesión nuevamente.');
      return;
    }

    const eventRequest = {
      ...this.createEventForm.value,
      organizadorId: this.organizadorId  // Asigna el organizadorId aquí
    };

    this.eventService.createEvent(eventRequest).subscribe(
      (response) => {
        alert('Evento creado con éxito');
        this.router.navigate(['/gestionar-eventos']);
      },
      (error) => {
        console.error('Error al crear el evento:', error);
        alert('Hubo un problema al crear el evento.');
      }
    );
  }

  ngOnInit(): void {
    const authenticatedUser = this.service.getAuthenticatedUser();
    if (authenticatedUser && authenticatedUser.id) {
      this.organizadorId = authenticatedUser.id;  // Obtiene y almacena el ID del usuario logueado
    } else {
      alert('No se pudo obtener la información del usuario. Inicie sesión nuevamente.');
    }

    this.service.getCategories().subscribe(
      (data: string[]) => {
        this.categories = data;
      },
      error => {
        console.error('Error fetching categories:', error);
      }
    );
  }
}
