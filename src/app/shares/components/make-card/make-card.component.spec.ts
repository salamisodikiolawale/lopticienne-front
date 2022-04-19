import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeCardComponent } from './make-card.component';

describe('MakeCardComponent', () => {
  let component: MakeCardComponent;
  let fixture: ComponentFixture<MakeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakeCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
