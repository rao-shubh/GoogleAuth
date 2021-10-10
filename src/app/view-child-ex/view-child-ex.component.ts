import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-view-child-ex',
  templateUrl: './view-child-ex.component.html',
  styleUrls: ['./view-child-ex.component.css']
})
export class ViewChildExComponent implements OnInit, AfterViewInit {

  public name = "Shubham";
  public firstName = "Shubh";
  public userName = "UserName";
  public childname = "ChildName";
  private _customerName = "customerName";
  @ViewChild('nameRef') public nameEleRef: ElementRef | undefined;
  @ViewChild(ChildComponent) childCompRef!: ChildComponent;

  public get customerName() {
    return this._customerName;
  }

  public set customerName(value) {
    this._customerName = value;
    if (value === 'Shubham') {
      alert("Hello Shubham");
    }
  }
  constructor() { }
  ngAfterViewInit(): void {
    this.nameEleRef?.nativeElement.focus();
    console.log("nameEleRef", this.nameEleRef);
    this.childCompRef.message = 'Message from parent component';
  }

  ngOnInit(): void {
  }

  greetUser(value: any): void {
    if (value === 'Shubham') {
      alert("Welcome back Shubham");
    }
  }

}
