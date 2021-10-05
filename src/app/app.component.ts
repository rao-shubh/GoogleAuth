import { Component, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { AdminComponent } from './admin/admin.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LearningApp';
}
