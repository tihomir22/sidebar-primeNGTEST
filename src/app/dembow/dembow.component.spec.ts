import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DembowComponent } from './dembow.component';

describe('DembowComponent', () => {
  let component: DembowComponent;
  let fixture: ComponentFixture<DembowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DembowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DembowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
