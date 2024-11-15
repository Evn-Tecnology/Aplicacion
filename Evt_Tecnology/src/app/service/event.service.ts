// src/app/service/event.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EventRequest, EventResponse } from '../model/models';

export const environment = {
  production: false,
  baseURL: 'http://localhost:8080/api/v1'
};

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private baseURL = `${environment.baseURL}/api/eventos`;
  private http = inject(HttpClient);

  constructor() {}

  createEvent(eventRequest: EventRequest): Observable<EventResponse> {
    return this.http.post<EventResponse>(`${this.baseURL}`, eventRequest);
  }
}
