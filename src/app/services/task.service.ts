import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private readonly tareas: any[] = [];

  obtenerTareas(): any[] {}

  agregarTarea(tarea: any): void {}

  eliminarTarea(id: number): void {}
}
