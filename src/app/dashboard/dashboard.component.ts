import { Component, ComponentFactoryResolver, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private vcr: ViewContainerRef,
    private cfr: ComponentFactoryResolver) {}

    ngOnInit(): void {
    }

    async loadAdmin() {
      this.vcr.clear();
      const {AdminComponent} = await import('../admin/admin.component');
      this.vcr.createComponent(
        this.cfr.resolveComponentFactory(AdminComponent)
      )
    }

    async loadUser() {
      this.vcr.clear();
      const {UserComponent} = await import('../user/user.component');
      this.vcr.createComponent(
        this.cfr.resolveComponentFactory(UserComponent)
      )
    }

}
