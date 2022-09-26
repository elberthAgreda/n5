import { HttpClient } from '@angular/common/http';
import { FimsService } from './films.service';
import { of } from 'rxjs';

describe('FimsService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let filmService: FimsService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    filmService = new FimsService(httpClientSpy);
  });

  it('should return expected films', (done: DoneFn) => {
    httpClientSpy.get.and.returnValue(of({}));
    filmService.getMovies().subscribe({
      next: (res) => {
        expect(res).toBeDefined();
        done();
      },
      error: done.fail,
    });
    expect(httpClientSpy.get.calls.count()).withContext('one call').toBe(1);
  });
});
