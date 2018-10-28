import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SprintTimeLineComponent } from './sprint-time-line.component';

describe('SprintTimeLineComponent', () => {
  let component: SprintTimeLineComponent;
  let fixture: ComponentFixture<SprintTimeLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SprintTimeLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprintTimeLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
