import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor() { }

  public account: number;

  public increase() {
this.account++;
  }

  public decrease(){
    this.account--;
  }

  ngOnInit(): void {
    this.account = 0;
  }

}
