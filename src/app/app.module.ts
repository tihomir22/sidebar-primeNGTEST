import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  SidebarModule,
  PasswordModule,
  InputTextModule,
  PanelModule
} from 'primeng/primeng';
import { DembowComponent } from './dembow/dembow.component';


@NgModule({
  declarations: [
    AppComponent,
    DembowComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PasswordModule,
    InputTextModule,
    PanelModule,
    SidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
