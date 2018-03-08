import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduledMatchComponent } from './scheduled-match.component';

describe('ScheduledMatchComponent', () => {
  let component: ScheduledMatchComponent;
  let fixture: ComponentFixture<ScheduledMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduledMatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduledMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
