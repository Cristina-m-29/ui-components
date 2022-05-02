import { AfterContentInit, AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpEvent, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-svg-icon',
  templateUrl: `./svg-icon.component.html`
})
export class SvgIconComponent implements OnInit, AfterViewInit {
  @Input() icon!: string;
  @Input() stroke?: string;
  @Input() width?: number = 40;
  @Input() height?: number = 40
  @Input() size?: number = 24;
  @Input() class?: string;

  @ViewChild('svg')
  public svg!: ElementRef;

  constructor(private http: HttpClient) {}

  ngAfterViewInit(): void {

    this.http.get("http://localhost:4200/lib/icons/flag.svg", {
      responseType: 'text'
    }).subscribe((svg: string) => {
      this.svg.nativeElement.innerHTML = svg.replace("<svg ", `<svg stroke=${this.stroke} `);
    });
  }

  ngOnInit(): void {

  }
}
