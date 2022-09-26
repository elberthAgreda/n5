import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { StoreService } from 'projects/host/src/app/home/store.service';
import { SeriesService } from './series.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [SeriesService],
})
export class HomeComponent implements OnInit {
  series: any[] = [];

  constructor(
    private readonly serieService: SeriesService,
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
    this.series = this.storeService.getSeries();
    if (this.series.length === 0) {
      this.getSeries();
    }
  }

  /**
   * Configuración desde el host para setear el idioma
   */
  getConfigHost(): void {
    this.route.queryParams.subscribe(({ lang }) => this.changeLang(lang));
  }

  getSeries(): void {
    this.serieService.getSeries().subscribe((res) => {
      this.series = res;
      this.storeService.setSeries(this.series);
    });
  }

  changeLang(lang: string) {
    this.translate.use(lang);
  }
}
