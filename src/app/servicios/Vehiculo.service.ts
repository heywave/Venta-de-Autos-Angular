import { Injectable } from '@angular/core';
import { Observable, from, map } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  constructor(private http: HttpClient) { }
  baseUrl = 'http://www.epico.gob.ec/vehiculo/public/api/';
  httpOptions = {
    
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getVehiculos(filtro?: string, rows?: number, page?: number, filtroCodigo?:string): Observable<Respuesta> {
    let body = new HttpParams();
    body = filtro ? body.set('filtro', filtro) : body;
    body = rows ? body.set('rows', rows) : body;
    body = page ? body.set('page', page) : body;
    body = filtroCodigo ? body.set('filtroCodigo', filtroCodigo) : body;
    console.log('Realizando solicitud GET para obtener todos los vehículos con los parámetros:', body.toString());
    return this.http.get<Respuesta>(this.baseUrl + 'vehiculos/', { params: body });
  }


  insertVehiculo(vehiculo: Vehiculo) {
    console.log('Realizando solicitud POST para insertar un nuevo vehículo:', vehiculo);
    return this.http.post<Respuesta>(this.baseUrl + 'vehiculo/', vehiculo, this.httpOptions);
  }

  
  getVehiculo(codigo: string) {
    console.log('Realizando solicitud GET para obtener un vehículo específico con código:', codigo);

    return this.http.get<Respuesta>(this.baseUrl + 'vehiculo/' + codigo);
  }

  
  updateVehiculo(vehiculo: any, codigo: string) {
    console.log('Realizando solicitud PUT para actualizar un vehículo con id:', codigo);
    return this.http.put<Respuesta>(this.baseUrl + 'vehiculo/' + vehiculo, codigo);
  }
 
  
  guardarNuevoVehiculo(vehiculo: any) {
    console.log('Realizando solicitud POST para guardar un nuevo vehículo:', vehiculo);
    return this.http.post<Respuesta>(this.baseUrl + 'vehiculo/', vehiculo, this.httpOptions);
  }
  
  
  eliminarVehiculo(codigo: string) {

    return this.http.delete<Respuesta>(this.baseUrl + 'vehiculo/' + codigo);
  }


}

export interface Vehiculo {
  codigo: string;
  marca: string;
  modelo: string;
  kilometraje?: string;
  precio?: number;
  foto?: string | null;
  anio?: number;
  calificacion?: number;

}
export interface Respuesta {
  codigo: string;
  mensaje: string;
  data: Array<Vehiculo> | Vehiculo | any;
  rows: number;
  pages: number;
  records: number;
  page: number;
}

export interface Vehiculo {
  codigo: string;
  marca: string;
  modelo: string;
  kilometraje?: string;
  precio?: number;
  foto?: string | null;
  anio?: number;
  calificacion?: number;

}
export interface Respuesta {
  codigo: string;
  mensaje: string;
  data: Array<Vehiculo> | Vehiculo | any;
  rows: number;
  pages: number;
  records: number;
  page: number;
}