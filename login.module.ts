import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { AppLoginComponent } from './app-login/app-login.component';
import {UsersModule} from "../../features/users/users.module";


@NgModule({
  declarations: [
    AppLoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    UsersModule
  ]
})
export class LoginModule { }
