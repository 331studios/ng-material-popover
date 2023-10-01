import { TestBed } from '@angular/core/testing';

import { MaterialPopoverService } from './material-popover.service';

describe('MaterialPopoverService', () => {
  let service: MaterialPopoverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaterialPopoverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
