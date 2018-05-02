import { NgModule , Optional ,SkipSelf} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent, 
    FooterComponent, 
    HeaderComponent
  ],
  declarations: [
    SidebarComponent, 
    FooterComponent, 
    HeaderComponent
  ]
})
export class CoreModule {
    // 防止多次注入
    constructor(@Optional() @SkipSelf() parent:CoreModule){
      if(parent){
        throw new Error("模块已注入,无需再次注入");
      }
    }
 }
