import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { McButtonSizeEnum, McButtonStyleEnum, McButtonTypeEnum } from './button.component.types';

@Component({
  selector: 'mc-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass', '../../styles/_typography.sass']
})
export class McButtonComponent implements OnInit {
  @Input() public style: McButtonStyleEnum = McButtonStyleEnum.NO_ICON;
  @Input() public type: McButtonTypeEnum = McButtonTypeEnum.PRIMARY;
  @Input() public size: McButtonSizeEnum = McButtonSizeEnum.MEDIUM;

  @Output() public focus: EventEmitter<FocusEvent> = new EventEmitter();

  private readonly BUTTON = 'mc-button'
  private theme: string = 'light';

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getCssClasses();
  }

  public getCssClasses(): string {
    const styleCssClass = `${this.BUTTON}-${this.theme}-${this.style}`;
    const typeCssClass = `${this.BUTTON}-${this.theme}-${this.type}`;
    const sizeCssClass = `${this.BUTTON}-${this.theme}-${this.size}`;
    return `${styleCssClass} ${typeCssClass} ${sizeCssClass}`;
  }

  public handleOnFocusEvent(event: FocusEvent): void {
    console.log('on focus in lib')
    this.focus.emit(event);
  }

}
