import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { McLabelComponent } from './label.component';
import { McTextModule } from '../text/text.module';

@NgModule({
  declarations: [ McLabelComponent ],
  imports: [ CommonModule, McTextModule ],
  exports: [ McLabelComponent ],
})
export class McLabelModule { }
