import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './layout/main/main.component';
import { PlaceHolderComponent } from './layout/main/place-holder/place-holder.component';
import { NavbarComponent } from './layout/main/navbar/navbar.component';
import { SidebarComponent } from './layout/main/sidebar/sidebar.component';
import { FooterComponent } from './layout/main/footer/footer.component';
import { HeaderComponent } from './layout/main/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PlaceHolderComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
