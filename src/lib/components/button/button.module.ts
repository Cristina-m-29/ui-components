import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { McButtonComponent } from './button.component';
import { McIconButtonComponent } from './icon-button/icon-button.component';

@NgModule({
  declarations: [ McButtonComponent, McIconButtonComponent ],
  imports: [ CommonModule ],
  exports: [ McButtonComponent, McIconButtonComponent ]
})
export class McButtonModule { }
