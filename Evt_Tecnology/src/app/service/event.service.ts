// src/app/service/event.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EventRequest, EventResponse } from '../model/models';
import { StorageService } from './storage.service'; // Importa StorageService si tienes el token ahí

export const environment = {
  production: false,
  baseURL: 'https://event-tecnology-latest-3.onrender.com/api/v1'
};

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private baseURL = `${environment.baseURL}/eventos`;
  private http = inject(HttpClient);
  private storageService = inject(StorageService); // Inyecta el StorageService para obtener el token

  constructor() {}

  private getAuthHeaders(): HttpHeaders {
    const token = this.storageService.getAuthData()?.token; // Obtén el token del almacenamiento
    return new HttpHeaders().set("Authorization", `Bearer ${token}`); // Agrega el token en la cabecera
  }

  createEvent(eventRequest: EventRequest): Observable<EventResponse> {
    const headers = this.getAuthHeaders();
    return this.http.post<EventResponse>(`${this.baseURL}`, eventRequest, { headers });
  }

  deleteEvent(eventId: number): Observable<void> {
    const headers = this.getAuthHeaders();
    return this.http.delete<void>(`${this.baseURL}/${eventId}`, { headers });
  }

  getEvents(): Observable<EventResponse[]> {
    const headers = this.getAuthHeaders();
    return this.http.get<EventResponse[]>(`${this.baseURL}`, { headers });
  }
  getCategories(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseURL}/categorias`);
  }
}
