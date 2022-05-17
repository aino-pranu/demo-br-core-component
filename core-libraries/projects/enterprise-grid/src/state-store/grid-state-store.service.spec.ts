import { TestBed } from '@angular/core/testing';

import { GridStateStoreService } from './grid-state-store.service';

describe('GridStateStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GridStateStoreService = TestBed.get(GridStateStoreService);
    expect(service).toBeTruthy();
  });
});
