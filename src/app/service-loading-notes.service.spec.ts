import { TestBed } from '@angular/core/testing';

import { ServiceLoadingNotesService } from './service-loading-notes.service';

describe('ServiceLoadingNotesService', () => {
  let service: ServiceLoadingNotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceLoadingNotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
