import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { McIconPosition, McIconSize, McIconType, McUIIcon } from '../icon/icon.component.types';
import { McButtonUtils } from './button-utils.component';
import { McButtonColor, McButtonSize, McButtonType, McButtonTypeEnum } from './button.component.types';

@Component({
  selector: 'mc-button',
  templateUrl: './button.component.html',
  styleUrls: [
    './button.component.sass',
    '../../styles/_shadows.sass',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class McButtonComponent implements OnChanges {
  @Input() public color: McButtonColor = 'default';
  @Input() public type: McButtonType = 'primary';
  @Input() public size: McButtonSize = 'medium';
  @Input() public loading = false;
  @Input() public disabled = false;
  @Input() public showOverlay = false;

  @Input() public icon: McUIIcon | undefined = undefined;
  @Input() public iconPosition: McIconPosition = 'left';
  @Input() public iconType: McIconType = 'stoke';

  @Output() public focus: EventEmitter<FocusEvent> = new EventEmitter();

  private readonly BUTTON = 'mc-button'
  private readonly BUTTON_SHADOW = 'mc-button-shadow';
  private readonly BUTTON_LOADER = 'mc-button-loader';
  private theme: string = 'light';

  public loadingDisabled = false;

  constructor(private cdr: ChangeDetectorRef, private buttonUtils: McButtonUtils) {}

  public ngOnChanges(): void {
    if (this.loading) {
      this.loadingDisabled = true;
    }
    this.cdr.detectChanges();
  }
  
  get overlayCssClasses(): string {
    return `${this.BUTTON}-${this.theme}-${this.size}`
  }

  get buttonCssClasses(): string {
    const theme = `${this.BUTTON}-${this.theme}`;
    const themeColor = `${theme}-${this.color}`

    const typeCssClass = `
      ${ (this.disabled) ? '' : themeColor }
      ${ (this.disabled || this.loadingDisabled) ? '' : `${themeColor}-effects` }
      ${ (this.disabled) ? `${theme}-disabled-${this.color}-${this.type}` : `${themeColor}-${this.type}` }
      ${ (this.disabled || this.loadingDisabled) ? '' : `${themeColor}-${this.type}-effects` }
    `;
    
    const sizeCssClass = `${theme}-${this.buttonUtils.getIconSize(this.size)} ${theme}-${this.size}`;

    const shadowCssClass = this.type !== McButtonTypeEnum.TERTINARY ? this.BUTTON_SHADOW : '';

    const loadingDisabledCssClass = this.loadingDisabled ? `${theme}-loading-disabled` : '';

    return `${typeCssClass} ${sizeCssClass} ${shadowCssClass} ${loadingDisabledCssClass}`;
  }

  get loaderCssClasses(): string {
    return `${this.BUTTON_LOADER} ${this.BUTTON_LOADER}-${this.color}-${this.type}`;
  }

  get iconSize(): McIconSize {
    return this.buttonUtils.getIconSize(this.size);
  }

  get iconSizeInPixels(): number {
    return this.buttonUtils.getIconSizeInPixels(this.size);
  }

  get getColorForIcon(): string {
    return this.buttonUtils.getColorForIcon(this.disabled, this.color, this.type);
  }

  public handleOnFocusEvent(event: FocusEvent): void {
    this.focus.emit(event);
  }

  public handleEvent(event: Event): void {
    if (this.disabled || this.loadingDisabled) {
      event.stopImmediatePropagation();
      event.stopPropagation();
    }
  }

}
