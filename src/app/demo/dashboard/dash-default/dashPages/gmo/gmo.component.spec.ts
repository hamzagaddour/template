import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GmoComponent } from './gmo.component';

describe('GmoComponent', () => {
  let component: GmoComponent;
  let fixture: ComponentFixture<GmoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
