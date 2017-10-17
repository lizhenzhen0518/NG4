import { NgModule } from '@angular/core';
import { ForgetComponent } from './forget';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from '../shared';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  imports: [ LoginRoutingModule, SharedModule, BrowserModule ],
  declarations: [ForgetComponent , LoginComponent , RegisterComponent ]
})
export class LoginModule { }
