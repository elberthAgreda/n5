import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { SeriesService } from './series.service';

describe('SeriesService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let seriesService: SeriesService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    seriesService = new SeriesService(httpClientSpy);
  });

  it('should return expected series', (done: DoneFn) => {
    httpClientSpy.get.and.returnValue(of({ results: [] }));
    seriesService.getSeries().subscribe({
      next: (res) => {
        expect(res).toBeDefined();
        done();
      },
      error: done.fail,
    });
    expect(httpClientSpy.get.calls.count()).withContext('one call').toBe(1);
  });
});
