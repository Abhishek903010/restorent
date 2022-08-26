import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestorentDashComponent } from './restorent-dash.component';

describe('RestorentDashComponent', () => {
  let component: RestorentDashComponent;
  let fixture: ComponentFixture<RestorentDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestorentDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestorentDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
