import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  public handleOnClickEvent(event: MouseEvent): void {
    console.log('on click in comp')
  }

  public handleOnFocusEvent(event: FocusEvent): void {
    console.log('on focus in comp')
  }

  public handleOnMouseEnter(event: MouseEvent): void {
    console.log('on mouse enter in comp')
  }

  public handleOnMouseLeave(event: MouseEvent): void {
    console.log('on mouse leave in lib')
  }
}
