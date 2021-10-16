import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-template-driven-form1',
  templateUrl: './template-driven-form1.component.html',
  styleUrls: ['./template-driven-form1.component.css']
})
export class TemplateDrivenForm1Component implements OnInit {
  topics = ['Angular', 'React', 'Vue'];

  userModel = new User('Rob', 'rob@test.com', 5677877654, '', 'morning', true);

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('Value submitted: ', this.userModel);
  }

}
