import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedMatchComponent } from './featured-match.component';

describe('FeaturedMatchComponent', () => {
  let component: FeaturedMatchComponent;
  let fixture: ComponentFixture<FeaturedMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedMatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
