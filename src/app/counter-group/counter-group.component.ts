import { Component, Input, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Counter } from './../model/counter';


@Component({
  selector: 'app-counter-group',
  templateUrl: './counter-group.component.html',
  styleUrls: ['./counter-group.component.css']
})
export class CounterGroupComponent implements OnInit {

  @Input() size: number;

  public get sumResult(): number {
    let total = 0;
    for (let index = 0; index < this.counters.length; index++) {

      total += this.counters[index].account;
    }
    return total;
  }

  public counters: Array<Counter>

  constructor() {

   }

  ngOnInit(): void {
    this.counters = this.createCounters(this.size);    
  }

  private createCounters(size: number): Array<Counter>{
    let counterArray = new Array<Counter>();

    for(let index = 0;index <= size;index++){
      counterArray.push(new Counter(0));
    }
    return counterArray;
  }
}
