import { TestBed } from '@angular/core/testing';

import { ArtikliLoadService } from './artikli-load.service';

describe('ArtikliServiceService', () => {
  let service: ArtikliLoadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtikliLoadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
