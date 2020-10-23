import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterGroupComponent } from './counter-group.component';
import { By } from '@angular/platform-browser';
import { CounterComponent } from '../counter/counter.component';

describe('CounterGroupComponent', () => {
  let component: CounterGroupComponent;
  let fixture: ComponentFixture<CounterGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CounterGroupComponent,
        CounterComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterGroupComponent);
    component = fixture.componentInstance;
    component.size = 1;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have increase button', () => {
    component.counters[0].increase();
    expect(component.sumResult).toBe(1);
  });

  it('should increase account when click increase button', () => {
    fixture.detectChanges();
    const buttonEl = fixture.debugElement.query(By.css('#increaseButton'));
    const labelEl = fixture.debugElement.query(By.css('#total'));
    const accountEl = fixture.debugElement.query(By.css('#account'));
    buttonEl.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(labelEl.nativeElement.textContent).toBe('1');
  });
});
