import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeoplePageComponent } from './people-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToasterService } from 'angular2-toaster';
import { RouterTestingModule } from '@angular/router/testing';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ListTitleItem } from '../../shared/components/list/list-title/list-title-item.interface';
import { AbstractObject } from '../../shared/interfaces/abstract-object.interface';

@Component({
  selector: 'app-list',
  template: '<div></div>'
})
export class ListComponent {
  @Input() searchable = false;
  @Input() paginated = false;
  @Input() columnsList: ListTitleItem[] = [];
  @Input() defaultSearchValue: string;
  @Input() items: AbstractObject[] = [];
  @Input() totalItemsCount = 0;
  @Input() pageIndex = 0;
  @Output() search: EventEmitter<string> = new EventEmitter<string>();
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();
}


describe('PeoplePageComponent', () => {
  let component: PeoplePageComponent;
  let fixture: ComponentFixture<PeoplePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PeoplePageComponent, ListComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [ToasterService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeoplePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
