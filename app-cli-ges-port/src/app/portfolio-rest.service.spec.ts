/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PortfolioRestService } from './portfolio-rest.service';

describe('PortfolioRestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PortfolioRestService]
    });
  });

  it('should ...', inject([PortfolioRestService], (service: PortfolioRestService) => {
    expect(service).toBeTruthy();
  }));
});
