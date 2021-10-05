import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-place-holder',
  templateUrl: './place-holder.component.html',
  styleUrls: ['./place-holder.component.css']
})
export class PlaceHolderComponent implements OnInit {

  public user = 'User';
  public siteUrl = window.location.href;
  public myId = 'testId';
  public isDisbaled = false;
  public greetMsg = '';
  constructor() { }

  ngOnInit(): void {
  }

  greetUser() {
    return "Hello " + this.user;
  }

  onClick(event: any): void {
    alert("This is greet event");
    console.log("Event:", event);
    this.greetMsg = "Welcome to this page";
  }

}
