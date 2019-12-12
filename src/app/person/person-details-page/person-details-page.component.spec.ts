import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonDetailsPageComponent } from './person-details-page.component';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FieldsConfig } from '../../shared/interfaces/fields-config.interface';
import { AbstractObject } from '../../shared/interfaces/abstract-object.interface';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToasterService } from 'angular2-toaster';
import { MatDialog, MatDialogModule } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { ListTitleItem } from '../../shared/components/list/list-title/list-title-item.interface';

@Component({
  selector: 'app-details-info',
  template: '<div></div>'
})
export class DetailsInfoComponent {
  @Input() title: string;
  @Input() fieldsConfig: FieldsConfig[];
  @Input() item: AbstractObject;
}

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


describe('PersonDetailsPageComponent', () => {
  let component: PersonDetailsPageComponent;
  let fixture: ComponentFixture<PersonDetailsPageComponent>;
  let routerStub;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PersonDetailsPageComponent,
        DetailsInfoComponent,
        ListComponent
      ],
      imports: [
        HttpClientTestingModule,
        MatDialogModule,
      ],
      providers: [
        ToasterService,
        MatDialog,
        { provide: Router, useValue: routerStub },
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: {
              subscribe: () => {
              }
            },
            snapshot: {
              paramMap: {
                subscribe: () => {
                }
              }
            }
          }
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    routerStub = {
      navigate: jasmine.createSpy('navigate')
    };
    fixture = TestBed.createComponent(PersonDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
