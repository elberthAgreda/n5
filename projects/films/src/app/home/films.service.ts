import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpProxyService } from 'projects/libs/components/src/public-api';
import { environment } from '../../environments/environment';

@Injectable()
export class FimsService {
  private httpProxy: HttpProxyService;

  constructor(private http: HttpClient) {
    this.httpProxy = new HttpProxyService(http, environment.filmsDomain);
  }

  /** @description obtiene las películas de la API de Harry Poter */
  public getMovies<T>(): Observable<T> {
    return this.httpProxy.get<T>('characters', false);
  }
}
