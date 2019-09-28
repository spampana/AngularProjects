import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SepMenuComponent } from './sep-menu.component';

describe('SepMenuComponent', () => {
  let component: SepMenuComponent;
  let fixture: ComponentFixture<SepMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SepMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SepMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
