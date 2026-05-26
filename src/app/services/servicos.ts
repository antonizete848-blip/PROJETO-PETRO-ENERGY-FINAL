import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicosService {

  apiUrl = 'http://localhost:3000/servicos';

  constructor(private http: HttpClient) {}

  getServicoPorId(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

}