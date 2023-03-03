import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {
  counter = 0;
  maxCount = 10;
  increment() {
    this.counter += 1;
  }
  decrement() {
    this.counter -= 1;
  }
}
