import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private url: string = "http://localhost:8000/usuarios"

  constructor(private http: HttpClient) { }

  getUsuarios(){
    return this.http.get(this.url)
  }
}
