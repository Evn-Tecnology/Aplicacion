export interface AuthRequest {
  email: string;
  password: string;
}

export interface AuthResponse{

  id:number;
  token:string;
  firstName:string;
  lastName:string;
  role:string;

}

export interface  RegisterRequest{
  firstName:string;
  lastName:string;
  email:string;
  telefono:string;
  password:string;
}

export interface RegisterResponse{
  id:number;
  firstName:string;
  lastName:string;
  email:string;
  rol:string;

}

export interface User{
  id?: number;
  firstName: string;
  lastName: string;
  role: string;
}

// src/app/model/models.ts

export interface EventRequest {
  organizadorId: number;
  eventNombre: string;
  categoriaEvento: string;
  eventDescripcion: string;
  eventFecha: Date;
  eventHora: string;
  eventFechaFin?: Date;
  eventLugar: string;
  capacidad: number;
  esPagado: boolean;
  precio?: number;
  tipoEvento: string;
}

export interface EventResponse {
  id: number;
  eventNombre: string;
  categoriaEvento: string;
  eventDescripcion: string;
  eventFecha: string;
  eventHora: string;
  eventFechaFin: string;
  eventLugar: string;
  capacidad: number;
  esPagado: boolean;
  precio?: number;
  tipoEvento: string;
  message: string;
}

