import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <!-- class binding -->
  <h2 [class.title-format]="isEnabled">
  Welcome to the <span class="title-color">{{title.toUpperCase()}}</span> application!
  </h2>
  <span [ngClass]="normalClass">Hi!!!</span>`,
  
  styles: [`.title-color {
    color: red;
  }
  .title-format {
    font-style: italic;
  }
  h2 {
    background-color: rgb(118, 181, 192);
    padding: 20px;
    margin: 0;
  }
  `]
})
export class HeaderComponent implements OnInit {

  public title = 'Angular Learning';
  public isEnabled = true;
  public normalClass = {
    ".title-format": this.isEnabled,
  }
  constructor() { }

  ngOnInit(): void {
  }

}
