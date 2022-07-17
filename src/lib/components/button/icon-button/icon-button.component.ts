import { ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { McIconSize, McIconType, McUIIcon } from '../../icon/icon.component.types';
import { McButtonUtils } from '../button-utils.component';
import { McButtonColor, McButtonSize, McButtonType } from '../button.component.types';

@Component({
  selector: 'mc-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: [
    './icon-button.component.sass',
    '../../../styles/_shadows.sass'
  ]
})
export class McIconButtonComponent implements OnChanges{
  @Input() public icon: McUIIcon = 'down-circle';
  @Input() public color: McButtonColor = 'default';
  @Input() public type: McButtonType = 'primary';
  @Input() public iconType: McIconType = 'stoke';
  @Input() public size: McButtonSize = 'medium';
  @Input() public loading = false;
  @Input() public disabled = false;
  @Input() public showOverlay: boolean = false;

  @Output() public focus: EventEmitter<FocusEvent> = new EventEmitter();

  constructor(private cdr: ChangeDetectorRef, private buttonUtils: McButtonUtils) {}

  public ngOnChanges(): void {
    this.cdr.detectChanges();
  }

  public handleOnFocusEvent(event: FocusEvent): void {
    this.focus.emit(event);
  }

  get iconSize(): McIconSize {
    return this.buttonUtils.getIconSize(this.size);
  }

  get getColorForIcon(): string {
    return this.buttonUtils.getColorForIcon(this.disabled, this.color, this.type);
  }
}
