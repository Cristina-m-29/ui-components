import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, OnChanges, ViewChild } from '@angular/core';
import { McLabelColor, McLabelSize } from './label.component.types';

@Component({
  selector: 'mc-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class McLabelComponent implements OnChanges, AfterViewInit {
  @Input() public size: McLabelSize = 'medium';
  @Input() public color: McLabelColor | string = 'purple';

  @ViewChild('mcLabel') label!: ElementRef<HTMLElement>;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    if (!['grey', 'light', 'dark', 'purple', 'red', 'orange', 'green'].includes(this.color)) {
      this.label.nativeElement.setAttribute('style', `color: ${this.color}`);
      this.cdr.detectChanges();
    }
  }

  ngOnChanges(): void {
    this.cdr.detectChanges();
  }
}
