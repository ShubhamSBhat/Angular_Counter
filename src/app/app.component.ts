import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Remainder App';
  isLoggedin = false;

  login() {
    this.isLoggedin = true;
  }

  logout() {
    this.isLoggedin = false;
  }
  counter1 = 0;
  counter(type: string) {
    if (type == 'add') {
      this.counter1++;
    }
    if (type == 'sub') {
      this.counter1--;
    }
  }
}
