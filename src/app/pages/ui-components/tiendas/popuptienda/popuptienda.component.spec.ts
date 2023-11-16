import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopuptiendaComponent } from '././popuptienda.component';

describe('PopupComponent', () => {
  let component: PopuptiendaComponent;
  let fixture: ComponentFixture<PopuptiendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopuptiendaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopuptiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
