import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { ShareModule } from './share/share.module';

import { Apiservice } from './service/api.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule,
    ShareModule,
    AppRoutingModule,
    LoginModule
  ],
  providers: [
    {
      provide: 'BASE_URL',
      useValue: {
        url: 'http://localhost:4000'
      }
    },
    {
      provide: Apiservice,
      useClass:Apiservice
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
