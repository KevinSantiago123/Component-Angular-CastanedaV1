import { TestBed } from '@angular/core/testing';

import { ListTeacherService } from './list-teacher.service';

describe('ListTeacherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListTeacherService = TestBed.get(ListTeacherService);
    expect(service).toBeTruthy();
  });
});
