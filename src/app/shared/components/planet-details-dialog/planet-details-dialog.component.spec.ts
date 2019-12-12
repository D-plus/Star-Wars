import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetDetailsDialogComponent } from './planet-details-dialog.component';

describe('PlanetDetailsDialogComponent', () => {
  let component: PlanetDetailsDialogComponent;
  let fixture: ComponentFixture<PlanetDetailsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetDetailsDialogComponent ]
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
