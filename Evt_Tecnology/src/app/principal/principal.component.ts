import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent {
  benefits = [
    { icon: 'icon-users', title: 'Aprende de expertos', description: 'Conoce las mentes más brillantes del mundo tecnológico' },
    { icon: 'icon-network', title: 'Networking profesional', description: 'Conéctate con otros profesionales del sector' },
    { icon: 'icon-cpu', title: 'Acceso a tecnología', description: 'Descubre las últimas innovaciones en el sector' }
  ];

  events = [
    { image: 'https://source.unsplash.com/random/800x600?technology,1', title: 'DevTech Conference 2024', date: '12 Nov 2024', location: 'Trujillo' },
    { image: 'https://source.unsplash.com/random/800x600?technology,2', title: 'Data Science Summit', date: '22 Jan 2025', location: 'Lima' },
    { image: 'https://source.unsplash.com/random/800x600?technology,3', title: 'AI Workshop', date: '15 Feb 2025', location: 'Cusco' }
  ];

  testimonials = [
    { quote: 'Un evento increíble que me permitió conocer lo último en tecnología.', author: 'María López', role: 'Frontend Developer' },
    { quote: 'La mejor experiencia de networking que he tenido en mi carrera profesional.', author: 'Carlos Ruiz', role: 'CTO' }
  ];

  sponsors = [1, 2, 3, 4, 5]; // Representación de patrocinadores
}
