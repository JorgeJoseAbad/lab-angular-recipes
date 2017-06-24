import { TestBed, inject } from '@angular/core/testing';

import { DishesServiceService } from './dishes-service.service';

describe('DishesServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DishesServiceService]
    });
  });

  it('should be created', inject([DishesServiceService], (service: DishesServiceService) => {
    expect(service).toBeTruthy();
  }));
});
