import { TestBed } from '@angular/core/testing';

import { BurgerQueenDBService } from './burger-queen-db.service';

describe('BurgerQueenDBService', () => {
  let service: BurgerQueenDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BurgerQueenDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
