import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Counter } from '../model/counter';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    component.counter = new Counter(0);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should increase account when click increase button', () => {

    let increaseButton = fixture.debugElement.query(By.css("#increaseButton"));
    let accountLable = fixture.debugElement.query(By.css('#account'));
    increaseButton.triggerEventHandler('click', null);
    fixture.detectChanges();
    debugger;
    expect(accountLable.nativeElement.textContent).toBe('1');

  });
});
