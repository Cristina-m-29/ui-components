import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { McButtonModule } from 'dist';
import { McTextModule } from 'src/lib/public_api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    McButtonModule,
    McTextModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
