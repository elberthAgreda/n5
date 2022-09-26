import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Store {
  id: string;
  image: string;
  name: string;
}
interface ConfigMF {
  language: string;
}

@Injectable({ providedIn: 'root' })
export class StoreService {
  // Almacena configuraciones globales para ser compartida entre MFs
  private configMf = new BehaviorSubject<ConfigMF>({ language: 'en' });
  $configMf = this.configMf.asObservable();
  // Almacena en memoria las películas
  private storeFilms = new BehaviorSubject<Store[]>([]);
  // Almacena en memoria las series
  private storeSerie = new BehaviorSubject<Store[]>([]);

  public setConfig(config: ConfigMF) {
    this.configMf.next(config);
  }

  public setFilms(films: Store[]) {
    this.storeFilms.next(films);
  }

  public getFilms(): Store[] {
    return this.storeFilms.value;
  }

  public setSeries(series: Store[]) {
    this.storeSerie.next(series);
  }

  public getSeries(): Store[] {
    return this.storeSerie.value;
  }
}
