import { Component, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { AdminComponent } from './admin/admin.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LearningApp';
  /* constructor(private vcr: ViewContainerRef,
    private cfr: ComponentFactoryResolver) {}

    async loadAdmin() {
      this.vcr.clear();
      const {AdminComponent} = await import('./admin/admin.component');
      this.vcr.createComponent(
        this.cfr.resolveComponentFactory(AdminComponent)
      )
    }

    async loadUser() {
      this.vcr.clear();
      const {UserComponent} = await import('./user/user.component');
      this.vcr.createComponent(
        this.cfr.resolveComponentFactory(UserComponent)
      )
    } */
}
