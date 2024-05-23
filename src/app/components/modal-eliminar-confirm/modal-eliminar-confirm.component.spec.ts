import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEliminarConfirmComponent } from './modal-eliminar-confirm.component';

describe('ModalEliminarConfirmComponent', () => {
  let component: ModalEliminarConfirmComponent;
  let fixture: ComponentFixture<ModalEliminarConfirmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalEliminarConfirmComponent]
    });
    fixture = TestBed.createComponent(ModalEliminarConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
