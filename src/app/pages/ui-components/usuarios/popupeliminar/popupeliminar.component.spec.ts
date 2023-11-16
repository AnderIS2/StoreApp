import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupeliminarComponent } from './popupeliminar.component';

describe('PopupeliminarComponent', () => {
  let component: PopupeliminarComponent;
  let fixture: ComponentFixture<PopupeliminarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupeliminarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupeliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
