import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupeliminartiendaComponent } from './popupeliminartienda.component';

describe('PopupeliminarComponent', () => {
  let component: PopupeliminartiendaComponent;
  let fixture: ComponentFixture<PopupeliminartiendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupeliminartiendaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupeliminartiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
