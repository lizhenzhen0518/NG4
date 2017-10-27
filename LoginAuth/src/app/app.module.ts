import { NgModule } from '@angular/core';
import { SharedModule } from './shared';
import { AppComponent } from './app.component';
import { LoginModule} from './login';
import { CoreModule} from './core';
import { BrowserModule} from '@angular/platform-browser';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
