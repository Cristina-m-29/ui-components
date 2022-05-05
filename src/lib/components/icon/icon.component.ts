import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { IMcIconType, IMcSvg, mcIcons, McIconSize, McIconType, McUIIcon } from './icon.component.types';

const defaultIcon: McUIIcon = 'add-user';
const defaultColor: string = '#28293D';
const defaultSize: McIconSize = 'extra-large';
const defaultType: McIconType = 'stoke';

@Component({
  selector: 'mc-icon',
  template: `<span #svgWrapper (focus)="handleOnFocusEvent($event)"></span>`,
  styleUrls: ['./icon.component.css']
})
export class McIconComponent implements AfterViewInit {
  @Input() icon: McUIIcon = defaultIcon;
  @Input() type: McIconType = defaultType;

  @Input() class?: string;
  @Input() color: string = defaultColor;
  @Input() size: McIconSize = defaultSize;

  @Output() public focus: EventEmitter<FocusEvent> = new EventEmitter();

  @ViewChild('svgWrapper')
  public svg!: ElementRef<SVGTSpanElement>;

  ngAfterViewInit(): void {
    const typeIconsList = mcIcons.find((icon: IMcIconType) => icon.type === this.type) || mcIcons[0];
    let svg = typeIconsList.icons.find((svg: IMcSvg) => svg.icon === this.icon)?.svg || typeIconsList.icons[0].svg;

    if (this.class) {
      svg = svg.replace(/<svg /g, `<svg class=${this.class} `);
    }
    if (this.color !== defaultColor) {
      svg = svg.replace(/#28293D/g, `${this.color}`);
    }
    if (this.size !== defaultSize) {
      const size = this.getSize(this.size || 'extra-large');
      svg = svg.replace(/width="25" height="25"/g, `width="${size}" height="${size}"`)
    }

    this.svg.nativeElement.classList.add(`svg-wrapper-${this.size}`)
    this.svg.nativeElement.innerHTML = svg;
  }

  public handleOnFocusEvent(event: FocusEvent): void {
    this.focus.emit(event);
  }

  private getSize(sizeAsString: string): number {
    switch (sizeAsString) {
      case 'extra-large':
        return 25;
      case 'large':
        return 21;
      case 'medium':
        return 19;
      case 'small':
        return 17;
      default:
        return 25
    }
  }
}
