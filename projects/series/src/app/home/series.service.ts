import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { HttpProxyService } from 'projects/libs/components/src/public-api';
import { environment } from '../../environments/environment';

interface ApiResult {
  info: any;
  results: any[];
}

@Injectable()
export class SeriesService {
  private httpProxy: HttpProxyService;

  constructor(private http: HttpClient) {
    this.httpProxy = new HttpProxyService(http, environment.seriesDomain);
  }

  /** @description obtiene los datos de la API de Rick and Morty */
  public getSeries(): Observable<any[]> {
    return this.httpProxy
      .get<ApiResult>('character', false)
      .pipe(map(({ results }) => results));
  }
}
