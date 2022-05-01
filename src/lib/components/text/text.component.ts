import { Component, Input } from '@angular/core';
import { McTextType } from './text.component.types';

@Component({
  selector: 'mc-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.sass', '../../styles/_typography.sass']
})
export class McTextComponent {
  @Input() public type: McTextType = "mc-text-body-1";
}
