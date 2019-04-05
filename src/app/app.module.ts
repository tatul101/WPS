import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppComponent } from './app.component';
import { WpsDemoComponent } from './component/wps-demo-component/wps-demo-component.component';
import { WPSService } from  'src/app/service/wpsService/wps.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    WpsDemoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFontAwesomeModule
  ],
  providers: [WPSService],
  bootstrap: [AppComponent]
})
export class AppModule { }
