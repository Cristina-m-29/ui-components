import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { McUIIcon } from '../../icon/icon.component.types';
import { McButtonSize, McButtonType, McButtonTypeEnum } from '../button.component.types';

@Component({
  selector: 'mc-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: [
    './icon-button.component.sass',
    '../../../styles/_shadows.sass'
  ]
})
export class McIconButtonComponent implements AfterViewInit {
  @Input() public icon: McUIIcon = 'down-circle';
  @Input() public type: McButtonType = 'primary';
  @Input() public size: McButtonSize = 'medium';
  @Input() public showOverlay: boolean = true;

  @Output() public focus: EventEmitter<FocusEvent> = new EventEmitter();

  @ViewChild('mcIcon')
  public mcIcon!: ElementRef;

  ngAfterViewInit() {
    this.mcIcon.nativeElement.src = `lib/icons/${this.getThemeForIcon()}/${this.icon}.svg`;
  }

  private readonly ICON_BUTTON = 'mc-icon-button'
  private readonly ICON_BUTTON_SHADOW = 'mc-button-shadow';
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

  private getThemeForIcon(): string {
    if (this.type === McButtonTypeEnum.PRIMARY) {
      return this.theme;
    }
    return this.theme === 'light' ? 'dark' : 'light';
  }
}
