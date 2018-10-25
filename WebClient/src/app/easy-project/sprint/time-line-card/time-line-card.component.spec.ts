import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeLineCardComponent } from './time-line-card.component';

describe('TimeLineCardComponent', () => {
  let component: TimeLineCardComponent;
  let fixture: ComponentFixture<TimeLineCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeLineCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeLineCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
