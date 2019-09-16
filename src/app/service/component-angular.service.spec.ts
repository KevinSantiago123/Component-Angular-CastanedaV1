import { TestBed } from '@angular/core/testing';

import { ComponentAngularService } from './component-angular.service';

describe('ComponentAngularService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComponentAngularService = TestBed.get(ComponentAngularService);
    expect(service).toBeTruthy();
  });
});
