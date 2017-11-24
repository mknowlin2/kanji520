import { TestBed, inject } from '@angular/core/testing';

import { HeaderLinkService } from './header-link.service';

describe('HeaderLinkService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeaderLinkService]
    });
  });

  it('should ...', inject([HeaderLinkService], (service: HeaderLinkService) => {
    expect(service).toBeTruthy();
  }));
});
