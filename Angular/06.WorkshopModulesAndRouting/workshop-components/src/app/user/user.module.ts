import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './user-login/user-login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    UserLoginComponent,
    ProfileComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
