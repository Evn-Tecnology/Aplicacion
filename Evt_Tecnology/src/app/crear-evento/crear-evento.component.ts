import {Component, OnInit} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import { CommonModule } from '@angular/common';
import { EventService } from '../service/event.service';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {ServiceService} from "../service/service.service";
import {HeaderLogComponent} from "../header-log/header-log.component";

@Component({
  selector: 'app-crear-evento',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, ReactiveFormsModule, HeaderLogComponent],
  templateUrl: './crear-evento.component.html',
  styleUrls: ['./crear-evento.component.css'],
})
export class CrearEventoComponent implements OnInit{
  createEventForm: FormGroup;
  isPaid: boolean = false; // Controla la visibilidad del campo de monto
  categories: string[] = [];

  constructor(
    private fb: FormBuilder,
    private eventService: EventService,
    private router: Router,
    private service: ServiceService
  ) {
    // Inicialización del formulario con FormBuilder y validadores
    this.createEventForm = this.fb.group({
      eventNombre: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      eventDescripcion: ['', Validators.required],
      eventFecha: ['', Validators.required],
      eventFechaFin: ['', Validators.required],
      eventHora: ['', Validators.required],
      eventLugar: ['', Validators.required],
      categoriaEvento: ['', Validators.required],
      tipoEvento: ['', Validators.required],
      esPagado: [false], // Inicialmente es gratuito
      precio: [{ value: null, disabled: true }], // Deshabilitado si es gratuito
      capacidad: ['', [Validators.required, Validators.min(1)]]
    });
  }

  // Método para manejar el cambio entre evento pagado y gratuito
  onPriceTypeChange(isPaid: boolean) {
    this.isPaid = isPaid;
    if (isPaid) {
      this.createEventForm.controls['precio'].enable(); // Habilita el campo de precio
    } else {
      this.createEventForm.controls['precio'].disable(); // Deshabilita el campo de precio
      this.createEventForm.controls['precio'].setValue(null); // Limpia el valor si es gratuito
    }
  }

  // Método para enviar el formulario
  onSubmit() {
    if (this.createEventForm.invalid) {
      alert('Por favor, complete todos los campos requeridos.');
      return;
    }

    const eventRequest = this.createEventForm.value;

    this.eventService.createEvent(eventRequest).subscribe(
      (response) => {
        alert('Evento creado con éxito');
        this.router.navigate(['/eventos']); // Redirige a la página de eventos
      },
      (error) => {
        console.error('Error al crear el evento:', error);
        alert('Hubo un problema al crear el evento.');
      }
    );
  }

  ngOnInit(): void {
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
