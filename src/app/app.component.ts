import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  protected title: string;

  constructor() {
    this.title = 'app';
  }

  clickButton(value) {
    console.log(value);
  }
}
