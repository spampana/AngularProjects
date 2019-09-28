import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SepHomeComponent } from './sep-home.component';

describe('SepHomeComponent', () => {
  let component: SepHomeComponent;
  let fixture: ComponentFixture<SepHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SepHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SepHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
