import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JphPostListComponent } from './jph-post-list.component';

describe('JphPostListComponent', () => {
  let component: JphPostListComponent;
  let fixture: ComponentFixture<JphPostListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JphPostListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JphPostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
