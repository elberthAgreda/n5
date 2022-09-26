import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { StoreService } from 'projects/host/src/app/home/store.service';
import { FimsService } from './films.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [FimsService],
})
export class HomeComponent implements OnInit {
  films: any[] = [];

  constructor(
    private readonly filmService: FimsService,
    private readonly storeService: StoreService,
    private readonly translate: TranslateService,
    private readonly route: ActivatedRoute
  ) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  ngOnInit(): void {
    this.getConfigHost();
    this.getData();
  }

  // Si la data obtenida por el servicio rest existe consume la data del store
  getData(): void {
    this.films = this.storeService.getFilms();
    if (this.films.length === 0) {
      this.getFilms();
    }
  }

  /**
   * Configuración desde el host para setear el idioma
   */
  getConfigHost(): void {
    this.route.queryParams.subscribe(({ lang }) => this.changeLang(lang));
  }

  getFilms(): void {
    this.filmService.getMovies<any>().subscribe((res) => {
      this.films = res;
      this.storeService.setFilms(this.films);
    });
  }

  changeLang(lang: string) {
    this.translate.use(lang);
  }
}
