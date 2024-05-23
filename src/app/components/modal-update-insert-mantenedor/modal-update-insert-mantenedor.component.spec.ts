import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUpdateInsertMantenedorComponent } from './modal-update-insert-mantenedor.component';

describe('ModalUpdateInsertMantenedorComponent', () => {
  let component: ModalUpdateInsertMantenedorComponent;
  let fixture: ComponentFixture<ModalUpdateInsertMantenedorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalUpdateInsertMantenedorComponent]
    });
    fixture = TestBed.createComponent(ModalUpdateInsertMantenedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
