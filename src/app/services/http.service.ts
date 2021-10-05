import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../interfaces/http-data';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private _url = "/assets/data/httpData.json";

  constructor(private http: HttpClient) { }

  getEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this._url);
  }

  getEmployeePromise(): Promise<Employee[]> {
    return this.http.get<Employee[]>(this._url).toPromise();
  }
}
