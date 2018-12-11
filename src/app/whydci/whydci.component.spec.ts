import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhydciComponent } from './whydci.component';

describe('WhydciComponent', () => {
  let component: WhydciComponent;
  let fixture: ComponentFixture<WhydciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhydciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhydciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
