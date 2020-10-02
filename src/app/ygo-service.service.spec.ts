import { TestBed } from '@angular/core/testing';

import { YgoServiceService } from './ygo-service.service';

describe('YgoServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YgoServiceService = TestBed.get(YgoServiceService);
    expect(service).toBeTruthy();
  });
});
