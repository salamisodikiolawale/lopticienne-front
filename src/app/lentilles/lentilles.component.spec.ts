import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LentillesComponent } from './lentilles.component';

describe('LentillesComponent', () => {
  let component: LentillesComponent;
  let fixture: ComponentFixture<LentillesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LentillesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LentillesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
