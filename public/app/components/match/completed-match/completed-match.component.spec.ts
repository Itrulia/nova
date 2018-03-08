import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedMatchComponent } from './completed-match.component';

describe('CompletedMatchComponent', () => {
  let component: CompletedMatchComponent;
  let fixture: ComponentFixture<CompletedMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedMatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
