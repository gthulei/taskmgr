import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { LoginRoutingModule } from './login-routing.module';
import { ShareModule } from '../share/share.module';

@NgModule({
  imports: [
    LoginRoutingModule,
    ShareModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
