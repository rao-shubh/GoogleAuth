import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingModules } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './layout/main/main.component';
import { NavbarComponent } from './layout/main/navbar/navbar.component';
import { SidebarComponent } from './layout/main/sidebar/sidebar.component';
import { FooterComponent } from './layout/main/footer/footer.component';
import { HeaderComponent } from './layout/main/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ContentHolderComponent } from './layout/main/content-holder/content-holder.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewChildExComponent } from './view-child-ex/view-child-ex.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './view-child-ex/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    HeaderComponent,
    ContentHolderComponent,
    routingModules,
    DashboardComponent,
    ViewChildExComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
