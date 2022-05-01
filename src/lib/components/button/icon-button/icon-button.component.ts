import { Component, EventEmitter, Input, Output } from '@angular/core';
import { McButtonSize, McButtonType, McButtonTypeEnum } from '../button.component.types';

@Component({
  selector: 'mc-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: [
    './icon-button.component.sass',
    '../../../styles/_shadows.sass'
  ]
})
export class McIconButtonComponent {
  @Input() public type: McButtonType = 'primary';
  @Input() public size: McButtonSize = 'medium';
  @Input() public showOverlay: boolean = true;

  @Output() public focus: EventEmitter<FocusEvent> = new EventEmitter();

  private readonly ICON_BUTTON = 'mc-icon-button'
  private readonly ICON_BUTTON_SHADOW = 'mc-icon-button-shadow';
  private theme: string = 'light';

  public getButtonCssClasses(): string {
    const typeCssClass = `${this.ICON_BUTTON}-${this.theme}-${this.type}`;
    const sizeCssClass = `${this.ICON_BUTTON}-${this.theme}-${this.size}`;
    const shadowCssClass = this.type !== McButtonTypeEnum.TERTINARY ? this.ICON_BUTTON_SHADOW : '';
    return `${typeCssClass} ${sizeCssClass} ${shadowCssClass}`;
  }

  public getOverlayCssClasses(): string {
    return `${this.ICON_BUTTON}-${this.theme}-${this.size}`
  }

  public handleOnFocusEvent(event: FocusEvent): void {
    this.focus.emit(event);
  }
}
