import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginScreenComponent } from './components/login-screen/login-screen.component';
import { RegisterScreenComponent } from './components/register-screen/register-screen.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [AppComponent, LoginScreenComponent, RegisterScreenComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
