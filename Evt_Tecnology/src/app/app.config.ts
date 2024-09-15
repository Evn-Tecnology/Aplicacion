import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

// Proveer las rutas usando provideRouter
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
