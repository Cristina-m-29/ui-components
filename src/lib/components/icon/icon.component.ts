import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { McUIIcon } from './icon.component.types';

@Component({
  selector: 'mc-icon',
  templateUrl: './icon.components.html',
  styleUrls: ['./icon.component.sass']
})
export class McIconComponent implements AfterViewInit {
  @Input() public icon: McUIIcon = 'down-circle';
  @Output() public focus: EventEmitter<FocusEvent> = new EventEmitter();

  @ViewChild('mcIcon')
  public mcIcon!: ElementRef;

  ngAfterViewInit(): void {
    this.mcIcon.nativeElement.src = `lib/icons/${this.getThemeForIcon()}/${this.icon}.svg`;
  }

  private theme: string = 'light';

  public handleOnFocusEvent(event: FocusEvent): void {
    this.focus.emit(event);
  }

  private getThemeForIcon(): string {
    return this.theme === 'light' ? 'dark' : 'light';
  }

}
