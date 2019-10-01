import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyComComponent } from './dummy-com.component';

describe('DummyComComponent', () => {
  let component: DummyComComponent;
  let fixture: ComponentFixture<DummyComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DummyComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
