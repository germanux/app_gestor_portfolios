/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PortfoliosService } from './portfolios.service';

describe('PortfoliosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PortfoliosService]
    });
  });

  it('should ...', inject([PortfoliosService], (service: PortfoliosService) => {
    expect(service).toBeTruthy();
  }));
});
