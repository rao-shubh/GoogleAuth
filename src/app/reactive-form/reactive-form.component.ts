import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  // FormBuilder Service

  /* registrationForm = new FormGroup({
    userName: new FormControl('Shubham', Validators.required),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    address: new FormGroup({
      city: new FormControl(''),
      state: new FormControl(''),
      postalCode: new FormControl('')
    })
  }); */

  constructor(private fb: FormBuilder) { }

  registrationForm = this.fb.group({
    userName: ['Shubham', Validators.required],
    password: [''],
    confirmPassword: [''],
    address: this.fb.group({
      city: [''],
      state: [''],
      postalCode: ['']
    })
  });

  ngOnInit(): void {
  }

  loadAPI() {
    this.registrationForm.setValue({
      userName: 'Bruce',
    password: 'test',
    confirmPassword: 'test',
    address: {
      city: 'Boston',
      state: 'Abc',
      postalCode: '1234'
    }
    });
  }

}
