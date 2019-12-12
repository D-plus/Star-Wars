import { TestBed } from '@angular/core/testing';

import { PlanetsService } from './planets.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PlanetsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: PlanetsService = TestBed.get(PlanetsService);
    expect(service).toBeTruthy();
  });
});
