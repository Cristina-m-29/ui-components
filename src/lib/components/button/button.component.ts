import { Component, EventEmitter, Input, Output } from '@angular/core';
import { McButtonSize, McButtonStyle, McButtonType, McButtonTypeEnum } from './button.component.types';

@Component({
  selector: 'mc-button',
  templateUrl: './button.component.html',
  styleUrls: [
    './button.component.sass',
    '../../styles/_typography.sass',
    '../../styles/_shadows.sass'
  ]
})
export class McButtonComponent {
  /** Icon type */
  @Input() public iconStyle: McButtonStyle = 'no-icon';
  @Input() public type: McButtonType = 'primary';
  @Input() public size: McButtonSize = 'medium';
  @Input() public showOverlay: boolean = true;

  @Output() public focus: EventEmitter<FocusEvent> = new EventEmitter();

  private readonly BUTTON = 'mc-button'
  private theme: string = 'light';

  constructor() {}

  public getButtonCssClasses(): string {
    const typeCssClass = `${this.BUTTON}-${this.theme}-${this.type}`;
    const sizeCssClass = `${this.BUTTON}-${this.theme}-${this.iconStyle}-${this.size}`;
    const shadowCssClass = this.type !== McButtonTypeEnum.TERTINARY ? 'mc-button-shadow' : '';
    return `${typeCssClass} ${sizeCssClass} ${shadowCssClass}`;
  }

  public getOverlayCssClasses(): string {
    return `${this.BUTTON}-${this.theme}-${this.iconStyle}-${this.size}`
  }

  public handleOnFocusEvent(event: FocusEvent): void {
    this.focus.emit(event);
  }

}
