import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupmostrartiendaComponent } from './popupmostrartienda.component';

describe('PopupmostrarComponent', () => {
  let component: PopupmostrartiendaComponent;
  let fixture: ComponentFixture<PopupmostrartiendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupmostrartiendaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupmostrartiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
