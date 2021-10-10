import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildExComponent } from './view-child-ex.component';

describe('ViewChildExComponent', () => {
  let component: ViewChildExComponent;
  let fixture: ComponentFixture<ViewChildExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewChildExComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChildExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
