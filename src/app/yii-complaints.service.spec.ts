import { TestBed } from '@angular/core/testing';

import { YiiComplaintsService } from './yii-complaints.service';

describe('YiiComplaintsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YiiComplaintsService = TestBed.get(YiiComplaintsService);
    expect(service).toBeTruthy();
  });
});
