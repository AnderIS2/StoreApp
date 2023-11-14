import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupactualizarComponent } from './popupactualizar.component';

describe('PopupactualizarComponent', () => {
  let component: PopupactualizarComponent;
  let fixture: ComponentFixture<PopupactualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupactualizarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupactualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
