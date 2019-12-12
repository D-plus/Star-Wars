import { TestBed } from '@angular/core/testing';

import { PeopleService } from './people.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToasterService } from 'angular2-toaster';
import { RouterTestingModule } from '@angular/router/testing';

describe('PeopleService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule, RouterTestingModule],
    providers: [ToasterService],
  }));

  it('should be created', () => {
    const service: PeopleService = TestBed.get(PeopleService);
    expect(service).toBeTruthy();
  });
});
