import { TestBed } from '@angular/core/testing';

import { MySerivesService } from './my-serives.service';

describe('MySerivesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MySerivesService = TestBed.get(MySerivesService);
    expect(service).toBeTruthy();
  });
});
