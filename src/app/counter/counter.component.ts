import { Component, Input, OnInit } from '@angular/core';
import { Counter } from '../model/counter';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor() { }

  @Input() counter: Counter;

  public increase() {
    this.counter.increase();
  }

  public decrease() {
    this.counter.decrease();
  }

  ngOnInit(): void {
  }

}
