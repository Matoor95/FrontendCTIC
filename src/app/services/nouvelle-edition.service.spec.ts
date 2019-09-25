import { TestBed } from '@angular/core/testing';

import { NouvelleEditionService } from './nouvelle-edition.service';

describe('NouvelleEditionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NouvelleEditionService = TestBed.get(NouvelleEditionService);
    expect(service).toBeTruthy();
  });
});
