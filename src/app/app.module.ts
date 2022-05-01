import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { McButtonModule, McTextModule } from 'dist';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { ButtonComponent } from './preview-components/button/button.component';
import { TextComponent } from './preview-components/text/text.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    TextComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    McButtonModule,
    McTextModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
