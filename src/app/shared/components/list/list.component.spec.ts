import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatInputModule } from '@angular/material/input';
import { ListComponent } from './list.component';
import { Component, EventEmitter, Input, Output, Pipe, PipeTransform } from '@angular/core';
import { ListTitleItem } from './list-title/list-title-item.interface';
import { SortData } from '../../interfaces/sort-data.interface';
import { AbstractObject } from '../../interfaces/abstract-object.interface';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-list-title',
  template: '<div></div>'
})
export class ListTitleComponent {
  @Input() active = false;
  @Input() item: ListTitleItem;
  @Input() sortDirection: string;
  @Output() sortClick: EventEmitter<SortData> = new EventEmitter<SortData>();
  faSort;
  faSortAmountDownAlt;
  faSortAmountDown;
}

@Component({
  selector: 'app-list-item',
  template: '<div></div>'
})
export class ListItemComponent {
  @Input() item: AbstractObject;
  @Input() columnsList: ListTitleItem[];
}

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {
  public name = 'sortBy';

  public transform(query: string, ...args: any[]): any {
    return query;
  }
}

describe('AppListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListComponent, ListTitleComponent, SortByPipe, ListItemComponent],
      imports: [MatInputModule, MatPaginatorModule, NoopAnimationsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
