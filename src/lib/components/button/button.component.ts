import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
export class McButtonComponent implements OnInit {
  /** Icon type */
  @Input() public iconStyle: McButtonStyle = 'no-icon';
  @Input() public type: McButtonType = 'primary';
  @Input() public size: McButtonSize = 'medium';
  @Input() public showOverlay: boolean = true;

  @Output() public focus: EventEmitter<FocusEvent> = new EventEmitter();

  private readonly BUTTON = 'mc-button'
  private theme: string = 'light';

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    console.log(this.iconStyle, this.type, this.size);
  }

  public getButtonCssClasses(): string {
    const typeCssClass = `${this.BUTTON}-${this.theme}-${this.type}`;
    const sizeCssClass = `${this.BUTTON}-${this.theme}-${this.iconStyle}-${this.size}`;
    const shadowCssClass = this.type !== McButtonTypeEnum.TERTINARY ? 'mc-button-shadow' : '';
    const gradientBorderCssClass = this.type === McButtonTypeEnum.OUTLINE ? 'mc-border-for-gradient' : '';
    return `${typeCssClass} ${sizeCssClass} ${shadowCssClass} ${gradientBorderCssClass}`;
  }

  public getOverlayCssClasses(): string {
    const sizeCssCLass = `${this.BUTTON}-${this.theme}-${this.iconStyle}-${this.size}`
    const gradientBorderCssClass = this.type === McButtonTypeEnum.OUTLINE ? 'mc-border-for-gradient' : '';
    return `${sizeCssCLass} ${gradientBorderCssClass}`;
  }

  public getGradientBorderCssClass(): string {
    return `mc-gradient-border-${this.iconStyle}-${this.size}`;
  }

  public handleOnFocusEvent(event: FocusEvent): void {
    console.log('on focus in lib')
    this.focus.emit(event);
  }

}
