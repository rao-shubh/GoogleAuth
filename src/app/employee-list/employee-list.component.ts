import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees: any = [];
  public employeeDetails: any = [];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.getEmployeeDetailsObservable();
    this.getEmployeeDetailsPromise();
  }

  getEmployeeDetailsObservable() {
    this.httpService.getEmployee().subscribe(data => {
      this.employees = data;
    });
  }

  getEmployeeDetailsPromise() {
    this.httpService.getEmployeePromise().then(data => {
      this.employeeDetails = data;
    });
  }

  getEmployeeDetailsObservableErr() {
    this.httpService.getEmployee().subscribe(data => {
      this.employees = data;
    },
    error => console.log('Error', error.statusText));
  }

  getEmployeeDetailsPromiseErr() {
    this.httpService.getEmployeePromise().then(data => {
      this.employeeDetails = data;
    },
    error => console.log('Error', error.statusText));
  }
}
