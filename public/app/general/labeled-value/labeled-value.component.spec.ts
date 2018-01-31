import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabeledValueComponent } from './labeled-value.component';

describe('LabeledValueComponent', () => {
  let component: LabeledValueComponent;
  let fixture: ComponentFixture<LabeledValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabeledValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabeledValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
