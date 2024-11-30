import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthRequest, AuthResponse, RegisterRequest, RegisterResponse, User} from "../model/models";
import {Observable, tap} from "rxjs";
import {StorageService} from "./storage.service";

export const environment = {
  production: false,
  baseURL: 'https://event-tecnology-latest-3.onrender.com/api/v1'
};

@Injectable({
  providedIn: 'root'
})

export class ServiceService {

  private baseURL = `${environment.baseURL}/auth`;
  private http = inject(HttpClient);
  private storageService = inject(StorageService);
  private tokenKey = 'authToken';

  constructor() { }

  login(authRequest: AuthRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.baseURL}/login`, authRequest).pipe(
      tap(response => this.storageService.setAuthData(response))
    );
  }
  register(registerRequest: RegisterRequest): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(`${this.baseURL}/register`, registerRequest);
  }

  private getToken(): string | null{
    if(typeof window!== 'undefined'){
      return localStorage.getItem(this.tokenKey);
    }else{
      return null;
    }
  }

  logout(): void {
    this.storageService.clearAuthData();
  }

  isAuthenticated(): boolean {
    return this.storageService.getAuthData() !== null;
  }

  getAuthenticatedUser(): User | null {
    const authData = this.storageService.getAuthData();
    if (authData) {
      return {
        id: authData.id,
        firstName: authData.firstName,
        lastName: authData.lastName,
        role: authData.role
      };
    }
    return null;
  }

  getCategories(): Observable<string[]> {
    return this.http.get<string[]>(`${environment.baseURL}/eventos/categorias`);
  }
}
