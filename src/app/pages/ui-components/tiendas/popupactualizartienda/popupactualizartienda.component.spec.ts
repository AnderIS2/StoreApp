import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupactualizartiendaComponent } from './popupactualizartienda.component';

describe('PopupactualizarComponent', () => {
  let component: PopupactualizartiendaComponent;
  let fixture: ComponentFixture<PopupactualizartiendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupactualizartiendaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupactualizartiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
