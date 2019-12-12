import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetDetailsDialogComponent } from './planet-details-dialog.component';
import { Component, Input } from '@angular/core';
import { AbstractObject } from '../../shared/interfaces/abstract-object.interface';
import { FieldsConfig } from '../../shared/interfaces/fields-config.interface';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-details-info',
  template: '<div></div>',
})
export class DetailsInfoComponent {
  @Input() title: string;
  @Input() fieldsConfig: FieldsConfig[];
  @Input() item: AbstractObject;
}

class MatDialogRefMock {
  open() {
  }

  close() {
  }
}

describe('PlanetDetailsDialogComponent', () => {
  let component: PlanetDetailsDialogComponent;
  let fixture: ComponentFixture<PlanetDetailsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlanetDetailsDialogComponent, DetailsInfoComponent],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useClass: MatDialogRefMock },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
