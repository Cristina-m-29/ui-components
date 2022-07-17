import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { McButtonComponent } from './button.component';
import { McIconButtonComponent } from './icon-button/icon-button.component';
import { McIconModule } from '../icon/icon.module';
import { McButtonUtils } from './button-utils.component';
import { McLabelModule } from '../label/label.module';

@NgModule({
  declarations: [ McButtonComponent, McIconButtonComponent ],
  imports: [ CommonModule, McIconModule, McLabelModule ],
  exports: [ McButtonComponent, McIconButtonComponent ],
  providers: [ McButtonUtils ]
})
export class McButtonModule { }
