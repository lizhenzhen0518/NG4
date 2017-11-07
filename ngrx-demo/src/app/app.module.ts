import { BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule} from '@angular/core';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent} from './app.component';
import { CoreModule} from './fun/core';
import { LoginModule} from './modules/login/login.module';

import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    CoreModule,
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule

  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
