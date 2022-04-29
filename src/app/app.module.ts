import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { McButtonModule } from 'dist';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    McButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
