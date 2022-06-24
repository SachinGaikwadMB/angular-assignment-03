import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwelleryService {

  constructor(private http : HttpClient) { }

  getAllRingsData() {
    return this.http.get<any>('http://localhost:3000/products');
  }
}
