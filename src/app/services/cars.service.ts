import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CarsService {
  constructor(public http: HttpClient) {}

  getAllCars(): Observable<any> {
    return this.http.get('https://www.freetestapi.com/api/v1/cars');
  }
  getCarById(id:number): Observable<any> {
    return this.http.get(`https://myfakeapi.com/api/cars/${id}`);
  }
  getfirst4Cars(): Observable<any> {
    return this.http.get('https://freetestapi.com/api/v1/cars?limit=4');
  }

}
