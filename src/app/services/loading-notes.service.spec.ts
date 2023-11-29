import { TestBed } from '@angular/core/testing';

import { LoadingNotesService } from './loading-notes.service';

describe('LoadingNotesService', () => {
  let service: LoadingNotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingNotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
