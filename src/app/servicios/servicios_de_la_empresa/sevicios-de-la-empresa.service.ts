import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiciosDeLaEmpresaService {
  constructor() {}

  obtenerServicios(): Observable<any[]> {
    // Simula datos obtenidos de un backend
    const servicios = [
      { titulo: 'Electricidad', descripcion: 'Instalaciones eléctricas y mantenimiento', icono: '💡' },
      { titulo: 'Plomería', descripcion: 'Reparaciones de tuberías y grifos', icono: '🚰' },
      { titulo: 'Carpintería', descripcion: 'Diseño y fabricación de muebles', icono: '🪚' },
      { titulo: 'Pintura', descripcion: 'Servicios de pintura profesional', icono: '🎨' },
      { titulo: 'Jardinería', descripcion: 'Mantenimiento de jardines y áreas verdes', icono: '🌱' },
      { titulo: 'Limpieza', descripcion: 'Servicios de limpieza profunda', icono: '🧹' },
    ];

    return of(servicios); // Simula una respuesta de backend con RxJS
  }
}
