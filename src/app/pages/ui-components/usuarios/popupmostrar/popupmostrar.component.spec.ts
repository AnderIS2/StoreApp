import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupmostrarComponent } from './popupmostrar.component';

describe('PopupmostrarComponent', () => {
  let component: PopupmostrarComponent;
  let fixture: ComponentFixture<PopupmostrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupmostrarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupmostrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
