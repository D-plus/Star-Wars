import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTitleComponent } from './list-title.component';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

describe('ListTitleComponent', () => {
  let component: ListTitleComponent;
  let fixture: ComponentFixture<ListTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListTitleComponent, FaIconComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTitleComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    component.item = { label: 'test', value: 'test', sortable: false };
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
