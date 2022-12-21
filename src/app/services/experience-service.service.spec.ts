import { TestBed } from '@angular/core/testing';

import { ExperienceServiceService } from './experience-service.service';

describe('PortfolioServiceService', () => {
  let service: ExperienceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExperienceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
