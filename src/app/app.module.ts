import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { McButtonModule, McTextModule } from 'dist';
import { McIconModule } from 'src/lib/public_api';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { ButtonComponent } from './preview-components/button/button.component';
import { IconComponent } from './preview-components/icon/icon.component';
import { TextComponent } from './preview-components/text/text.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    TextComponent,
    IconComponent,
   ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    McButtonModule,
    McIconModule,
    McTextModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
