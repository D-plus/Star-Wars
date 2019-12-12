import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonDetailsPageComponent } from './person-details-page.component';

describe('PersonDetailsPageComponent', () => {
  let component: PersonDetailsPageComponent;
  let fixture: ComponentFixture<PersonDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonDetailsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
