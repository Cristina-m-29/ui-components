import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { McButtonComponent } from './button.component';
import { McIconButtonComponent } from './icon-button/icon-button.component';
import { McIconModule } from '../icon/icon.module';

@NgModule({
  declarations: [ McButtonComponent, McIconButtonComponent ],
  imports: [ CommonModule, McIconModule ],
  exports: [ McButtonComponent, McIconButtonComponent ]
})
export class McButtonModule { }
