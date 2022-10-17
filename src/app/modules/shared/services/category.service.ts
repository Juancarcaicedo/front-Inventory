import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
//sirve para conectar la logica del back end

const base_url= environment.base_url;
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  //metodo para obtener todas las categorias 
  getCategories(){
    const endpoint =`${base_url}/categories`;
    return this.http.get(endpoint);

  }
}
