import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
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
  getEmployeeErr(): any {
    return this.http.get<Employee[]>(this._url).pipe(catchError(this.handleError));
  }

  getEmployeePromiseErr():any {
    return this.http.get<Employee[]>(this._url).pipe(catchError(this.handleError)).toPromise();
  }

  handleError(error: HttpErrorResponse): any {
    return throwError(error);
  }
}
