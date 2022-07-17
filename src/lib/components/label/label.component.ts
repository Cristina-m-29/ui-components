import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { McLabelSize } from './label.component.types';

@Component({
  selector: 'mc-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class McLabelComponent implements OnChanges, AfterViewInit {
  @Input() public size: McLabelSize = 'medium';
  @Input() public color: string = '#6244D9';

  @ViewChild('mcLabel') label!: ElementRef<HTMLElement>;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.label.nativeElement.setAttribute('style', `color: ${this.color}`);
  }

  ngOnChanges(): void {
    this.cdr.detectChanges();
  }

  get labelCssClass(): string {
    return `mc-label-${this.size}`;
  }

}
