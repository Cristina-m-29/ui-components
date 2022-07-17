import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mc-preview-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass']
})
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  print(text: string) {
    console.log(text);
  }
}
